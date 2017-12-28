package test.test.nanohttp.proxy;


import android.text.TextUtils;
import android.util.Log;

import org.nanohttpd.protocols.http.IHTTPSession;

import java.io.IOException;
import java.util.Map;

import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

/**
 * Created by zhangzhenwei on 2017/12/28.
 */

// to fix CORS
public class RequestProxy {
    private static final String TAG = "RequestProxy ";
    private static final OkHttpClient client = new OkHttpClient.Builder()
            .retryOnConnectionFailure(true)
            .build();

    public static Response proxyReq(IHTTPSession session) {

        session.getHeaders();
        session.getMethod();
        String query = session.getQueryParameterString();
        session.getUri();
        session.getParameters();

        String url = "https://m.mei.163.com" + session.getUri() + (TextUtils.isEmpty(query) ? "" : ("?" + query));

        Request.Builder builder = new Request.Builder();

        if (session.getHeaders() != null) {
            //builder.headers(Headers.of(session.getHeaders()));
            Map<String, String> hs = session.getHeaders();
            for(Map.Entry<String, String> entry : hs.entrySet()){
                String key = entry.getKey().toLowerCase();
                if(key.contains("referer") || key.contains("host") || key.contains("http-client-ip") || key.contains("remote-addr")){
                    continue;
                }
                builder.header(entry.getKey(),entry.getValue());
                Log.w(TAG," header key:" + entry.getKey() + "\n value: " + entry.getValue());
            }
        }
        builder.header("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36");

        builder.method(session.getMethod().name(), null)
                .url(url);

        Request request = builder.build();
        Log.w(TAG, "call: " + request.url().url().toString());
        try {
            Response response = client.newCall(request).execute();
            return response;
        } catch (Exception e) {
            Log.e(TAG, "exception, url" + url);
            e.printStackTrace();
        }

        return null;

    }

}
