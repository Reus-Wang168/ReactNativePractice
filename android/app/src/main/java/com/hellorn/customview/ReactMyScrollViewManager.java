package com.hellorn.customview;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

/**
 * Created by Rookie on 2017/9/29.
 */

public class ReactMyScrollViewManager extends ViewGroupManager<SlideDetailsLayout> {

    private static final String REACT_CLASS = "CustomScrollView";


    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected SlideDetailsLayout createViewInstance(ThemedReactContext reactContext) {
        return new SlideDetailsLayout(reactContext);
    }
}
