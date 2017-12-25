package test.test.nanohttp.server;

import android.util.Log;

/**
 * Created by zhangzhenwei on 2017/12/25.
 */

public class TrackerUtil {
    private static long start;
    private static long end;
    private static final String TAG = "Tracker";

    public static void start(String msg){
        start = System.currentTimeMillis();
        //Log.w(TAG, "" + msg + " , start at:" + start);
    }

    public static void end(String msg){
        end = System.currentTimeMillis();
        Log.w(TAG, "" + msg + " , spent:" + ( end - start ) + "ms");
    }

}
