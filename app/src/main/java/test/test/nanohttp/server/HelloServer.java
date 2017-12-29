package test.test.nanohttp.server;


import android.content.Context;

import org.nanohttpd.protocols.http.NanoHTTPD;
import org.nanohttpd.util.ServerRunner;

import java.util.logging.Logger;

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
        setHTTPHandler(new NanoHandler(context));

    }

}
