package test.test.nanohttp.server;

/*
 * #%L
 * NanoHttpd-Samples
 * %%
 * Copyright (C) 2012 - 2015 nanohttpd
 * %%
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 * 
 * 3. Neither the name of the nanohttpd nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 * #L%
 */

import android.content.Context;
import android.util.Log;

import org.nanohttpd.protocols.http.IHTTPSession;
import org.nanohttpd.protocols.http.NanoHTTPD;
import org.nanohttpd.protocols.http.request.Method;
import org.nanohttpd.protocols.http.response.Response;
import org.nanohttpd.protocols.http.response.Status;
import org.nanohttpd.util.ServerRunner;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.FileNameMap;
import java.net.URLConnection;
import java.util.Map;
import java.util.Random;
import java.util.logging.Logger;

/**
 * An example of subclassing NanoHTTPD to make a custom HTTP server.
 */
public class HelloServer extends NanoHTTPD {

    /**
     * logger to log to.
     */
    private static final Logger LOG = Logger.getLogger(HelloServer.class.getName());

    public static void main(String[] args) {
        ServerRunner.run(HelloServer.class);
    }

    public HelloServer(Context context, String ip) {
        super(ip, 8080);
        mContext = context;
    }

    @Override
    public Response serve(IHTTPSession session) {
        Method method = session.getMethod();
        String uri = session.getUri();
        Map<String, String> headers = session.getHeaders();
        LOG.info(method + " '" + uri + "' ");

        Response response = serve(uri, method, headers);
        if (response != null) {
            return response;
        }

        String msg = "<html><body><h1>Hello server</h1>\n";
        Map<String, String> parms = session.getParms();
        if (parms.get("username") == null) {
            msg += "<form action='?' method='get'>\n" + "  <p>Your name: <input type='text' name='username'></p>\n" + "</form>\n";
        } else {
            msg += "<p>Hello, " + parms.get("username") + "!</p>";
        }

        msg += "</body>" +
                "<script src='lib/js.js'></script>" +
                "</html>\n";

        return Response.newFixedLengthResponse(msg);
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
    Context mContext;

    public Response serve(String uri, Method method, Map<String, String> header) {
        Log.d(TAG, "SERVE ::  URI " + uri);
        final StringBuilder buf = new StringBuilder();
        for (Map.Entry<String, String> kv : header.entrySet()) {
            buf.append(kv.getKey() + " : " + kv.getValue() + "\n");
        }

        InputStream mBuffer;

        try {
            if (uri.contains("html")) {
                try {
                    mBuffer = mContext.getAssets().open(uri.substring(1));
                    return Response.newChunkedResponse(Status.OK, MIME_HTML, mBuffer);
                } catch (IOException e) {
                    Log.d(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND, MIME_HTML, "Not Found !");
                }
            } else if (uri.contains(".js")) {
                try {
                    mBuffer = mContext.getAssets().open(uri.substring(1));
                    return Response.newChunkedResponse(Status.OK, MIME_JS, mBuffer);
                } catch (IOException e) {
                    Log.d(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND, MIME_JS, "");
                }
            } else if (uri.contains(".css")) {
                try {
                    mBuffer = mContext.getAssets().open(uri.substring(1));
                    return Response.newChunkedResponse(Status.OK, MIME_CSS, mBuffer);
                } catch (IOException e) {
                    Log.d(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND, MIME_CSS, "");
                }

            } else if (uri.contains(".png")) {
                try {
                    mBuffer = mContext.getAssets().open(uri.substring(1));
                    return Response.newChunkedResponse(Status.OK, MIME_PNG, mBuffer);
                } catch (IOException e){
                    Log.d(TAG, "Error opening file" + uri.substring(1));
                    e.printStackTrace();
                    return Response.newFixedLengthResponse(Status.NOT_FOUND,MIME_PNG, "");
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
