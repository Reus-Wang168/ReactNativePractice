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

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;

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


        HashMap<String, String> mHashMap = new HashMap<>();

        try {
            Class mClass = Class.forName("java.util.Collections");

            Method mMethod = mClass.getDeclaredMethod("secondaryHash", Object.class);

            int result = (int) mMethod.invoke(null, "name");

            int index = result & 1;


            Log.e(TAG, "onCreate: mClass=" + mClass);
            Log.e(TAG, "onCreate: mMethod=" + mMethod);
            Log.e(TAG, "onCreate: result=" + result);
            Log.e(TAG, "onCreate: index=" + index);

        } catch (ClassNotFoundException e) {
            e.printStackTrace();

        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }


        mHashMap.put("name", "mike");

        mHashMap.put("address", "beijing");

        mHashMap.put("age", "18");


        Log.e(TAG, "onCreate: " + mHashMap.size());
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
