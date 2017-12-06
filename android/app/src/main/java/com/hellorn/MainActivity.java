package com.hellorn;

import android.content.Intent;
import android.graphics.Color;
import android.os.AsyncTask;
import android.os.Handler;
import android.view.Gravity;
import android.view.ViewManager;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    ViewManager mViewManager;
    TextView mTextView;

    Handler mHandler;
    AsyncTask mAsyncTask;

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
