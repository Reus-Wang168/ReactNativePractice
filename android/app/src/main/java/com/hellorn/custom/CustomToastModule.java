package com.hellorn.custom;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Rookie on 2017/8/28.
 */

public class CustomToastModule extends ReactContextBaseJavaModule {

    private static final String MODULE_NAME = "CustomToastModule";


    public CustomToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void showShort(String message) {
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void showLong(String message) {
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();
    }
}
