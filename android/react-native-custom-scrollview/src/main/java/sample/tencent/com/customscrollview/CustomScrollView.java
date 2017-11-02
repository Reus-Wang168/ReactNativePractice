package sample.tencent.com.customscrollview;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

/**
 * Created by Rookie on 2017/11/2.
 */

public class CustomScrollView extends ViewGroupManager<SlideDetailsLayout> {

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
