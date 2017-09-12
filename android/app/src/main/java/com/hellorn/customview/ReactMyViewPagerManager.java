package com.hellorn.customview;

import android.view.View;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

/**
 * Created by Rookie on 2017/8/29.
 */

public class ReactMyViewPagerManager extends ViewGroupManager<MyReactViewPager> {


    private static final String REACT_CLASS = "MyAndroidViewPager";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected MyReactViewPager createViewInstance(ThemedReactContext reactContext) {
        return new MyReactViewPager(reactContext);
    }


    @Override
    public boolean needsCustomLayoutForChildren() {
        return true;
    }

    @Override
    public void addView(MyReactViewPager parent, View child, int index) {
        parent.addViewToAdapter(child, index);
    }

    @Override
    public int getChildCount(MyReactViewPager parent) {
        return parent.getViewCountInAdapter();
    }

    @Override
    public View getChildAt(MyReactViewPager parent, int index) {
        return parent.getViewFromAdapter(index);
    }

    @Override
    public void removeViewAt(MyReactViewPager parent, int index) {
        parent.removeViewFromAdapter(index);
    }
}
