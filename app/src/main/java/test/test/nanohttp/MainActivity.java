package test.test.nanohttp;

import android.net.ConnectivityManager;
import android.net.Proxy;
import android.net.ProxyInfo;
import android.os.Build;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.KeyEvent;
import android.view.ViewGroup;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = (WebView) findViewById(R.id.web_view);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setMixedContentMode(WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE);

        WebView.setWebContentsDebuggingEnabled(true);
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return super.shouldOverrideUrlLoading(view, request);
            }
        });

        ConnectivityManager manager = (ConnectivityManager) getSystemService(CONNECTIVITY_SERVICE);
        String host;

        if(Build.VERSION.SDK_INT > 22){
            ProxyInfo proxy = manager.getDefaultProxy();
            if(proxy != null){ this.isFinishing();
                host = proxy.getHost();
                Log.w("NanoHttp", "Proxy host:" + host);
            }
        }

        //ProxySetting.setProxy(webView,"10.242.114.79", 8888, App.class.getName());
        ProxySetting.revertBackProxy(webView,App.class.getName());

        if(App.server.wasStarted()) {
            webView.postDelayed(new Runnable() {
                @Override
                public void run() {
                    webView.loadUrl("http://localhost:8080/www/index.html");
                }
            }, 1000);
        } else {
            Toast.makeText(this, " server not started. ", Toast.LENGTH_LONG).show();
        }

    }


    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if(event.getAction() == KeyEvent.ACTION_DOWN){
            switch (keyCode){
                case KeyEvent.KEYCODE_BACK:
                    if(webView.canGoBack()){
                        webView.goBack();
                        return true;
                    } else {
                        return super.onKeyDown(keyCode, event);
                    }
            }
        }

        return super.onKeyDown(keyCode, event);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        if(webView != null && webView.getParent() != null){
            ViewGroup vp = (ViewGroup) webView.getParent();
            vp.removeView(webView);
        }
    }
}
