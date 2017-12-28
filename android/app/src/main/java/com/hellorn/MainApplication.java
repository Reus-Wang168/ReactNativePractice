package com.hellorn;

import android.app.Application;

import com.BV.LinearGradient.LinearGradientPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.modules.network.OkHttpClientProvider;
import com.facebook.react.modules.network.ReactCookieJarContainer;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.facebook.stetho.Stetho;
import com.facebook.stetho.okhttp3.StethoInterceptor;
import com.hellorn.custom.CustomPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.rookie.customscrollview.CustomScrollViewPackage;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;

import okhttp3.OkHttpClient;


public class MainApplication extends Application implements ReactApplication {


    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.asList(
                    new MainReactPackage(),
                    new CustomPackage(),
                    new CustomScrollViewPackage(),
                    new PickerPackage(),
                    new VectorIconsPackage(),
                    new LinearGradientPackage(),
                    new RNFetchBlobPackage(),
                    new RCTCameraPackage());
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };


    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);

        Stetho.initializeWithDefaults(this);
        OkHttpClient mOkHttpClient = new OkHttpClient.Builder()
                .connectTimeout(0, TimeUnit.MICROSECONDS)
                .readTimeout(0, TimeUnit.MICROSECONDS)
                .writeTimeout(0, TimeUnit.MICROSECONDS)
                .cookieJar(new ReactCookieJarContainer())
                .addInterceptor(new StethoInterceptor())
                .build();
        OkHttpClientProvider.replaceOkHttpClient(mOkHttpClient);

    }
}

