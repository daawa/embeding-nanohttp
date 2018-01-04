package test.test.nanohttp.server;


import android.content.Context;

import org.nanohttpd.protocols.http.NanoHTTPD;
import org.nanohttpd.util.ServerRunner;

import java.util.logging.Logger;

public class LocalServer extends NanoHTTPD {

    public static void main(String[] args) {
        ServerRunner.run(LocalServer.class);
    }

    public LocalServer(Context context, String host, int port) {
        super(host, port);
        setHTTPHandler(new NanoHandler(context));
    }

}
