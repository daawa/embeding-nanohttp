package test.test.nanohttp;

import android.app.Application;

import java.io.IOException;

import test.test.nanohttp.server.HelloServer;

/**
 * Created by zhangzhenwei on 2017/11/6.
 */

public class App extends Application {

    public static HelloServer server;

    @Override
    public void onCreate() {
        super.onCreate();

        server = new HelloServer(this);

        try {
            server.start();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
