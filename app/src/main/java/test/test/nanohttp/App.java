package test.test.nanohttp;

import android.app.Application;
import android.content.Context;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.text.format.Formatter;
import android.util.Log;

import java.io.IOException;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.Enumeration;

import test.test.nanohttp.server.LocalServer;
import test.test.nanohttp.server.TrackerUtil;

/**
 * Created by zhangzhenwei on 2017/11/6.
 */

public class App extends Application {

    private static final String TAG = "App";
    public LocalServer server;

    public static App me;
    public String HOST;
    public int PORT;

    @Override
    public void onCreate() {
        super.onCreate();
        me = this;
        TrackerUtil.start("server booting");

        // todo: randomize port value
        PORT = 8090;

        String ip = getLocalAddress();
        Log.w(TAG, "local address:" + ip);
        ip = getWifiAddress();
        Log.w(TAG, "wifi address:" + ip);
        HOST = ip;
        if(! BuildConfig.DEBUG){
            HOST = "localhost";
        }

        server = new LocalServer(this, HOST, PORT);

        try {
            server.start();
        } catch (IOException e) {
            // todo: try different port
            e.printStackTrace();
        }

        TrackerUtil.end("server booted");

    }

    private String getWifiAddress(){
        WifiManager wifiMan = (WifiManager) this.getSystemService(Context.WIFI_SERVICE);
        WifiInfo wifiInf = wifiMan.getConnectionInfo();
        int ipAddress = wifiInf.getIpAddress();
        String ip = String.format("%d.%d.%d.%d", (ipAddress & 0xff),(ipAddress >> 8 & 0xff),(ipAddress >> 16 & 0xff),(ipAddress >> 24 & 0xff));
        return ip;
    }

    private String getLocalAddress(){
        try {
            for (Enumeration<NetworkInterface> en = NetworkInterface.getNetworkInterfaces(); en.hasMoreElements();) {
                NetworkInterface intf = en.nextElement();
                for (Enumeration<InetAddress> enumIpAddr = intf.getInetAddresses(); enumIpAddr.hasMoreElements();) {
                    InetAddress inetAddress = enumIpAddr.nextElement();
                    if (!inetAddress.isLoopbackAddress()) {
                        String ip = Formatter.formatIpAddress(inetAddress.hashCode());
                        Log.i(TAG, "***** IP="+ ip);
                        return ip;
                    }
                }
            }
        } catch (SocketException ex) {
            Log.e(TAG, ex.toString());
        }
        return null;
    }
}
