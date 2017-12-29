package test.test.nanohttp.server;

import android.content.Context;
import android.util.Log;

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
    Context context;

    NanoHandler(Context context){
        this.context = context;
    }
    
    @Override
    public Response handle(IHTTPSession session) {
        String uri = session.getUri();
        Map<String, String> headers = session.getHeaders();

        Response response1 = serveStatic(uri, headers);
        response1 = response1 == null ? RequestProxy.convert2NanoResponse(RequestProxy.proxyReq(session)) : response1;
        if (response1 != null) {
            return response1;
        }

        String msg = "<html><body><h1>404 Not Found</h1> <div><span>" + uri + " </span></div></body></html>\n";

        return Response.newFixedLengthResponse(msg);
    }


    public static final String
            MIME_PLAINTEXT = NanoHTTPD.MIME_PLAINTEXT,//"text/plain",
            MIME_HTML = NanoHTTPD.MIME_HTML, //"text/html",
            MIME_JS = "application/javascript",
            MIME_CSS = "text/css",
            MIME_PNG = "image/png",
            MIME_ICON = "image/x-icon",
            MIME_IMAGE = "image/*",
            MIME_DEFAULT_BINARY = "application/octet-stream",
            MIME_XML = "text/xml";

    String TAG = "TEST STATIC FILE";

    private Response serveStatic(String uri, Map<String, String> header) {
        Log.d(TAG, "SERVE ::  URI " + uri);
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
                    return Response.newChunkedResponse(Status.OK, MIME_HTML, mBuffer);
                } catch (IOException e) {
                    Log.d(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND, MIME_HTML, "Not Found !");
                }
            } else if (uri.contains(".js")) {
                try {
                    mBuffer = context.getAssets().open(uri.substring(1));

                    TrackerUtil.end("serve \"" + uri.toString());

                    return Response.newChunkedResponse(Status.OK, MIME_JS, mBuffer);
                } catch (IOException e) {
                    Log.d(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND, MIME_JS, "");
                }
            } else if (uri.contains(".css")) {
                try {
                    mBuffer = context.getAssets().open(uri.substring(1));
                    return Response.newChunkedResponse(Status.OK, MIME_CSS, mBuffer);
                } catch (IOException e) {
                    Log.d(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND, MIME_CSS, "");
                }

            } else if (uri.contains(".png")) {
                try {
                    mBuffer = context.getAssets().open(uri.substring(1));
                    return Response.newChunkedResponse(Status.OK, MIME_PNG, mBuffer);
                } catch (IOException e) {
                    Log.d(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND, MIME_PNG, "");
                }
            } else if (uri.contains(".gif")) {
                try {
                    mBuffer = context.getAssets().open(uri.substring(1));
                    return Response.newChunkedResponse(Status.OK, MIME_IMAGE, mBuffer);
                } catch (IOException e) {
                    Log.d(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND, MIME_PNG, "");
                }
            } else if (uri.contains(".ico")) {
                try {
                    mBuffer = context.getAssets().open("res/favicon.ico");
                    return Response.newChunkedResponse(Status.OK, MIME_IMAGE, mBuffer);
                } catch (IOException e) {
                    Log.d(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND, MIME_ICON, "");
                }
            } else if (uri.contains("/mnt/sdcard")) {
                Log.d(TAG, "request for media on sdCard " + uri);
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
            Log.d(TAG, "Error opening file" + uri.substring(1));
            e.printStackTrace();
            FileNameMap fileNameMap = URLConnection.getFileNameMap();
            String mimeType = fileNameMap.getContentTypeFor(uri);

            return Response.newFixedLengthResponse(Status.NOT_FOUND, mimeType, "");
        }

        return null;

    }
}
