package test.test.nanohttp.proxy;


import android.text.TextUtils;
import android.util.Log;

import org.nanohttpd.protocols.http.IHTTPSession;
import org.nanohttpd.protocols.http.request.Method;
import org.nanohttpd.protocols.http.response.Status;

import java.io.IOException;
import java.util.Map;

import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import test.test.nanohttp.server.TrackerUtil;

/**
 * Created by zhangzhenwei on 2017/12/28.
 */

/**
 * For fixing  web view's CORS limitations
 */
public class RequestProxy {
    private static final String TAG = "RequestProxy ";
    private static final OkHttpClient client = new OkHttpClient.Builder()
            .retryOnConnectionFailure(true)
            .build();

    public static Response proxyReq(IHTTPSession session) {

        String query = session.getQueryParameterString();
        session.getParameters();

        String url = "https://m.mei.163.com" + session.getUri() + (TextUtils.isEmpty(query) ? "" : ("?" + query));

        Request.Builder builder = new Request.Builder();

        if (session.getHeaders() != null) {
            Map<String, String> hs = session.getHeaders();
            for (Map.Entry<String, String> entry : hs.entrySet()) {
                String key = entry.getKey().toLowerCase();
                if (key.contains("referer")
                        || key.contains("host")
                        || key.contains("http-client-ip")
                        || key.contains("remote-addr")
                        || key.contains("accept-encoding")) {
                    continue;
                }
                builder.header(entry.getKey(), entry.getValue());

                //Log.w(TAG," header key:" + entry.getKey() + "\n value: " + entry.getValue());
            }
        }

        RequestBody body = null;
        if(session.getMethod() == Method.POST){
            Map<String, String> params = session.getParms();
            body = RequestBody.create(null, getBodyString(params));
        }

        builder.method(session.getMethod().name(),body)
                .url(url);

        Request request = builder.build();

        TrackerUtil.logRequest(request);

        try {
            Response response = client.newCall(request).execute();
            return response;
        } catch (Exception e) {
            Log.e(TAG, "exception, url" + url);
            e.printStackTrace();
        }

        return null;

    }

    public static org.nanohttpd.protocols.http.response.Response convertOkResponse2NanoResponse(Response response) {
        if (response == null) return null;

        org.nanohttpd.protocols.http.response.Response nanoResponse;


        byte[] bytes = new byte[0];

        try {
            if (response.body() != null) {
                bytes = response.body().bytes();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        int code = response.code();


        String contentType = (response.body() == null || response.body().contentType() == null) ? "text/plain" : response.body().contentType().toString();
        nanoResponse = org.nanohttpd.protocols.http.response.Response.newFixedLengthResponse(
                Status.lookup(code), contentType, bytes);
        Headers headers1 = response.headers();
        if (headers1 != null) {
            for (String key : headers1.names()) {
                String val = headers1.get(key);
                if (!TextUtils.isEmpty(val)) {
                    nanoResponse.addHeader(key, val);
                }
            }
        }

        TrackerUtil.logResponse(response);

        return nanoResponse;

    }

    private static String getBodyString(Map<String, String> map) {
        StringBuilder builder = new StringBuilder();
        if (map != null) {
            for (String key : map.keySet()) {
                builder.append(key).append("=").append(map.get(key)).append("&");
            }
            if (builder.length() > 0) {
                builder.deleteCharAt(builder.length() - 1);
            }
        }

        return builder.toString();
    }

}
