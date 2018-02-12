package com.reactnativepractice.custom.params;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.modules.deviceinfo.DeviceInfoModule;

/**
 * Created by Rookie on 2017/8/30.
 */

public class CustomParamsMoudle extends ReactContextBaseJavaModule implements ActivityEventListener {

    private static final String MODULE_NMAE = "CustomParamsMoudle";

    private Promise mPromise;

    DeviceInfoModule mDeviceInfoModule;

    ReactRootView mReactRootView;

    public CustomParamsMoudle(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(this);
    }

    @Override
    public String getName() {
        return MODULE_NMAE;
    }

    @ReactMethod
    public void choose(ReadableMap options, Promise promise) {
        mPromise = promise;
        Activity mActivity = getCurrentActivity();

        if (mActivity == null) {
            promise.reject("ACTIVITY_NOT_EXITS", "activity not exist");
            return;
        }

        String name = options.hasKey("name") ? options.getString("name") : "test";

        Intent mIntent = new Intent(mActivity,SecondActivity.class);
        mIntent.putExtra("name", name);
        mActivity.startActivityForResult(mIntent, 100);
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        if (requestCode == 100) {
            if (resultCode == Activity.RESULT_OK) {
                String result = data.getStringExtra("result");
                mPromise.resolve(result);
            }
        }
    }

    @Override
    public void onNewIntent(Intent intent) {

    }
}
