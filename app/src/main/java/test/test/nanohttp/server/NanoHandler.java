package test.test.nanohttp.server;

import android.content.Context;

import org.nanohttpd.protocols.http.IHTTPSession;
import org.nanohttpd.protocols.http.NanoHTTPD;
import org.nanohttpd.protocols.http.response.Response;
import org.nanohttpd.protocols.http.response.Status;
import org.nanohttpd.util.IHandler;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.FileNameMap;
import java.net.URLConnection;
import java.util.Map;
import java.util.Random;

import test.test.nanohttp.proxy.RequestProxy;

/**
 * Created by zhangzhenwei on 2017/12/29.
 */

public class NanoHandler implements IHandler<IHTTPSession, Response> {
    String TAG = NanoHandler.class.getSimpleName();

    Context context;

    NanoHandler(Context context){
        this.context = context;
    }
    
    @Override
    public Response handle(IHTTPSession session) {
        String uri = session.getUri();
        Map<String, String> headers = session.getHeaders();

        Response response1 = serveStatic(uri, headers);
        response1 = response1 == null ? RequestProxy.convertOkResponse2NanoResponse(RequestProxy.proxyReq(session, "https://m.mei.163.com")) : response1;
        if (response1 != null) {
            return response1;
        }

        String msg = "<html><body><h1>404 Not Found</h1> <div><span>" + uri + " </span></div></body></html>\n";

        return Response.newFixedLengthResponse(msg);
    }


    private Response serveStatic(String uri, Map<String, String> header) {
        TrackerUtil.log(TAG, "SERVE ::  URI " + uri);
        final StringBuilder buf = new StringBuilder();
        for (Map.Entry<String, String> kv : header.entrySet()) {
            buf.append(kv.getKey() + " : " + kv.getValue() + "\n");
        }

        TrackerUtil.start("");

        InputStream mBuffer;

        try {
            if (uri.contains(".html")) {
                try {
                    mBuffer = context.getAssets().open(uri.substring(1));
                    return Response.newChunkedResponse(Status.OK, NanoHTTPD.mimeTypes().get("html"), mBuffer);
                } catch (IOException e) {
                    TrackerUtil.log(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND, NanoHTTPD.mimeTypes().get("html"), "Not Found !");
                }
            } else if (uri.contains(".js")) {
                try {
                    mBuffer = context.getAssets().open(uri.substring(1));

                    TrackerUtil.end("serve \"" + uri.toString());

                    return Response.newChunkedResponse(Status.OK, NanoHTTPD.mimeTypes().get("js"), mBuffer);
                } catch (IOException e) {
                    TrackerUtil.log(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND, NanoHTTPD.mimeTypes().get("js"), "");
                }
            } else if (uri.contains(".css")) {
                try {
                    mBuffer = context.getAssets().open(uri.substring(1));
                    return Response.newChunkedResponse(Status.OK, NanoHTTPD.mimeTypes().get("css"), mBuffer);
                } catch (IOException e) {
                    TrackerUtil.log(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND, NanoHTTPD.mimeTypes().get("css"), "");
                }

            } else if (uri.contains(".png")) {
                try {
                    mBuffer = context.getAssets().open(uri.substring(1));
                    return Response.newChunkedResponse(Status.OK, NanoHTTPD.mimeTypes().get("png"), mBuffer);
                } catch (IOException e) {
                    TrackerUtil.log(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND, NanoHTTPD.mimeTypes().get("png"), "");
                }
            } else if (uri.contains(".gif")) {
                try {
                    mBuffer = context.getAssets().open(uri.substring(1));
                    return Response.newChunkedResponse(Status.OK, NanoHTTPD.mimeTypes().get("gif"), mBuffer);
                } catch (IOException e) {
                    TrackerUtil.log(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND, NanoHTTPD.mimeTypes().get("png"), "");
                }
            } else if (uri.contains(".ico")) {
                try {
                    mBuffer = context.getAssets().open("res/favicon.ico");
                    return Response.newChunkedResponse(Status.OK, NanoHTTPD.mimeTypes().get("icon"), mBuffer);
                } catch (IOException e) {
                    TrackerUtil.log(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND, NanoHTTPD.mimeTypes().get("icon"), "");
                }
            } else if (uri.contains("/mnt/sdcard")) {
                TrackerUtil.log(TAG, "request for media on sdCard " + uri);
                File request = new File(uri);
                mBuffer = new FileInputStream(request);
                FileNameMap fileNameMap = URLConnection.getFileNameMap();
                String mimeType = fileNameMap.getContentTypeFor(uri);

                Response streamResponse = Response.newChunkedResponse(Status.OK, mimeType, mBuffer);
                Random rnd = new Random();
                String etag = Integer.toHexString(rnd.nextInt());
                streamResponse.addHeader("ETag", etag);
                streamResponse.addHeader("Connection", "Keep-alive");

                return streamResponse;
            }

        } catch (IOException e) {
            TrackerUtil.log(TAG, "Error opening file" + uri.substring(1));
            e.printStackTrace();
            FileNameMap fileNameMap = URLConnection.getFileNameMap();
            String mimeType = fileNameMap.getContentTypeFor(uri);

            return Response.newFixedLengthResponse(Status.NOT_FOUND, mimeType, "");
        }

        return null;

    }
}
