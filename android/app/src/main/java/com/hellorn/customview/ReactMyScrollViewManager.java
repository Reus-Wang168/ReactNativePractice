package com.hellorn.customview;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

/**
 * Created by Rookie on 2017/9/29.
 */

public class ReactMyScrollViewManager extends ViewGroupManager<CustomScrollView> {

    private static final String REACT_CLASS = "CustomScrollView";


    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected CustomScrollView createViewInstance(ThemedReactContext reactContext) {
        return new CustomScrollView(reactContext);
    }
}
