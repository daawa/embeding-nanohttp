package test.test.nanohttp.server;

import android.util.Log;

import okhttp3.Headers;
import okhttp3.Request;
import okhttp3.Response;

/**
 * Created by zhangzhenwei on 2017/12/25.
 */

public class TrackerUtil {
    private static long start;
    private static long end;
    private static final String TAG = "Tracker";

    public static void start(String msg) {
        start = System.currentTimeMillis();
        //Log.w(TAG, "" + msg + " , start at:" + start);
    }

    public static void end(String msg) {
        end = System.currentTimeMillis();
        Log.w(TAG, "" + msg + " , spent:" + (end - start) + "ms");
    }

    public static void logRequest(Request request) {
        log("\n ");
        log("\n  ");
        log("=====================");
        log("\n");

        log("Request, url : " + request.url().url().toString());
        log("\n ");

        log("\nHeaders: \n");
        for (String key : request.headers().names()) {
            log(" " + key + ": " + request.headers().get(key));
        }

        log("\n ");
        log("\n=====================\n\n");
        log("\n ");
        log("\n ");
    }

    private static void log(String msg) {
        Log.w(TAG, msg);
    }

    public static void logResponse(Response response) {
        Headers headers = response.headers();
        String url = response.request().url().url().toString();

        log("\n");
        log("\n");
        log("=====================");
        log("\n");

        log("Response, url : " + url);
        log("\n");

        log("\nHeaders: \n");
        if (headers != null && headers.names() != null)
            for (String key : headers.names()) {
                log(" " + key + ": " + headers.get(key));
            }

        log("\n");
        log("\n=====================\n\n");
        log("\n");
        log("\n");
    }

}
