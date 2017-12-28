package com.hellorn;

import android.content.Intent;
import android.os.AsyncTask;
import android.os.Binder;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.ViewManager;
import android.widget.TextView;

import com.facebook.react.ReactActivity;
import com.facebook.react.uimanager.ReactShadowNodeImpl;

import java.util.ArrayList;

public class MainActivity extends ReactActivity {

    ViewManager mViewManager;
    TextView mTextView;

    Handler mHandler;
    AsyncTask mAsyncTask;

    ArrayList mArrayList;
    ReactShadowNodeImpl mReactShadowNode;

    Binder mBinder;


    private static final String TAG = "MainActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        final float density = getResources().getDisplayMetrics().density;

        Log.e(TAG, "onCreate: density=" + density);
    }

    @Override
    public void startActivity(Intent intent) {
        super.startActivity(intent);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "HelloRN";
    }
}
