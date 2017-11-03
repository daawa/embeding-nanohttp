package test.test.nanohttp;

import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.nanohttpd.protocols.http.NanoHTTPD;
import org.nanohttpd.protocols.http.response.Response;
import org.nanohttpd.protocols.http.response.Status;
import org.nanohttpd.samples.http.HelloServer;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.FileNameMap;
import java.net.URLConnection;
import java.util.Map;
import java.util.Properties;
import java.util.Random;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final WebView webView = (WebView) findViewById(R.id.web_view);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return super.shouldOverrideUrlLoading(view, request);
            }
        });

        HelloServer server = new HelloServer();

        try {
            server.start();
        } catch (IOException e) {
            e.printStackTrace();
        }

        webView.postDelayed(new Runnable() {
            @Override
            public void run() {
                webView.loadUrl("http://localhost:8080/dummy");
            }
        }, 1000);

    }


    public static final String
            MIME_PLAINTEXT = "text/plain",
            MIME_HTML = "text/html",
            MIME_JS = "application/javascript",
            MIME_CSS = "text/css",
            MIME_PNG = "image/png",
            MIME_DEFAULT_BINARY = "application/octet-stream",
            MIME_XML = "text/xml";

    String TAG = "TEST STATIC FILE";
    Context mContext = this;

    public Response serve(String uri, String method, Properties header) {
        Log.d(TAG, "SERVE ::  URI " + uri);
        final StringBuilder buf = new StringBuilder();
        for (Map.Entry<Object, Object> kv : header.entrySet())
            buf.append(kv.getKey() + " : " + kv.getValue() + "\n");
        InputStream mbuffer = null;


        try {
            if (uri != null) {

                if (uri.contains(".js")) {
                    mbuffer = mContext.getAssets().open(uri.substring(1));
                    return Response.newChunkedResponse(Status.OK, MIME_JS, mbuffer);
                } else if (uri.contains(".css")) {
                    mbuffer = mContext.getAssets().open(uri.substring(1));
                    return Response.newChunkedResponse(Status.OK, MIME_CSS, mbuffer);

                } else if (uri.contains(".png")) {
                    mbuffer = mContext.getAssets().open(uri.substring(1));
                    // HTTP_OK = "200 OK" or HTTP_OK = Status.OK;(check comments)
                    return Response.newChunkedResponse(Status.OK, MIME_PNG, mbuffer);
                } else if (uri.contains("/mnt/sdcard")) {
                    Log.d(TAG, "request for media on sdCard " + uri);
                    File request = new File(uri);
                    mbuffer = new FileInputStream(request);
                    FileNameMap fileNameMap = URLConnection.getFileNameMap();
                    String mimeType = fileNameMap.getContentTypeFor(uri);

                    Response streamResponse = Response.newChunkedResponse(Status.OK, mimeType, mbuffer);
                    Random rnd = new Random();
                    String etag = Integer.toHexString(rnd.nextInt());
                    streamResponse.addHeader("ETag", etag);
                    streamResponse.addHeader("Connection", "Keep-alive");

                    return streamResponse;
                } else {
                    mbuffer = mContext.getAssets().open("index.html");
                    return Response.newChunkedResponse(Status.OK, MIME_HTML, mbuffer);
                }
            }

        } catch (IOException e) {
            Log.d(TAG, "Error opening file" + uri.substring(1));
            e.printStackTrace();
        }

        return null;

    }
}
