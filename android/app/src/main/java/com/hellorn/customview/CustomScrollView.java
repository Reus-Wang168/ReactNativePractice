
package com.hellorn.customview;

import android.animation.ValueAnimator;
import android.content.Context;
import android.support.v4.view.ViewCompat;
import android.util.AttributeSet;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.AccelerateInterpolator;

/**
 * Created by Rookie on 2017/9/29.
 */

public class CustomScrollView extends ViewGroup {
    private static final String TAG = "CustomScrollView";
    private int offset;
    private ValueAnimator mValueAnimator;

    private float motionX, motionY;

    private View upView, downView;

    private static final int MASK = 0X01;

    private static final int OPEN = MASK << 1;
    private static final int CLOSE = MASK << 2;

    private int status = CLOSE;


    public CustomScrollView(Context context) {
        super(context);
    }


    public CustomScrollView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public CustomScrollView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }


    @Override
    public boolean onInterceptTouchEvent(MotionEvent ev) {
        boolean shouldIntercept = false;

        int action = ev.getActionMasked();

        switch (action) {
            case MotionEvent.ACTION_DOWN:
                motionX = ev.getX();
                motionY = ev.getY();
                shouldIntercept = false;
                break;
            case MotionEvent.ACTION_MOVE:
                float x = ev.getX();
                float y = ev.getY();

                float deltaX = x - motionX;
                float deltaY = y - motionY;

                if (Math.abs(deltaY) > Math.abs(deltaX)) {


                    View subView = status == CLOSE ? upView : downView;
                    boolean subViewCanScroll = ViewCompat.canScrollVertically(subView, (int) -deltaY);
                    Log.e("aaa", "onInterceptTouchEvent: subViewCanScroll==" + subViewCanScroll);
                    shouldIntercept = !subViewCanScroll;

                }


                break;
            case MotionEvent.ACTION_UP:
            case MotionEvent.ACTION_CANCEL:
                shouldIntercept = false;
                break;
        }

        return shouldIntercept;
    }


    @Override
    public boolean onTouchEvent(MotionEvent event) {
        boolean handled = false;
        int action = event.getActionMasked();
        switch (action) {
            case MotionEvent.ACTION_DOWN:
                handled = true;
                break;
            case MotionEvent.ACTION_MOVE:
                float deltaY = event.getY() - motionY;
                handleActionMove(deltaY);
                handled = true;
                break;
            case MotionEvent.ACTION_UP:
            case MotionEvent.ACTION_CANCEL:
                handleActionFinish();
                handled = false;
                break;
        }

        return handled;
    }

    private void handleActionFinish() {
        Log.e(TAG, "handleActionFinish: offset==" + offset);

        Log.e(TAG, "handleActionFinish: getMeasuredHeight=" + getMeasuredHeight());


        if (status == CLOSE) {
            if (offset < 0) {
                if (offset < -200) {

                    status = OPEN;
                    mValueAnimator = ValueAnimator.ofInt(offset, -getMeasuredHeight());
                } else {
                    status = CLOSE;
                    mValueAnimator = ValueAnimator.ofInt(offset, 0);
                }
            } else {
                mValueAnimator = ValueAnimator.ofInt(offset, 0);

            }
        } else if (status == OPEN) {
            if (offset < 0) {
                if (offset > 200 - getMeasuredHeight()) {
                    status = CLOSE;
                    mValueAnimator = ValueAnimator.ofInt(offset, 0);
                } else {
                    status = OPEN;
                    mValueAnimator = ValueAnimator.ofInt(offset, -getMeasuredHeight());
                }
            } else {
                status = OPEN;
                mValueAnimator = ValueAnimator.ofInt(-getMeasuredHeight(), -getMeasuredHeight());
            }
        }
        mValueAnimator.setInterpolator(new AccelerateInterpolator());
        mValueAnimator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() {
            @Override
            public void onAnimationUpdate(ValueAnimator animation) {
                offset = (int) animation.getAnimatedValue();
                Log.e(TAG, "onAnimationUpdate: offset=" + offset);
                scrollTo(0, -offset);
            }
        });
        mValueAnimator.setDuration(300);
        mValueAnimator.start();

        Log.e(TAG, "handleActionFinish: status=" + status);
    }

    private void handleActionMove(float deltaY) {


        Log.e(TAG, "handleActionMove: delatY=" + deltaY);


        if (status == CLOSE) {


            offset = (int) (deltaY * 0.2f);
        } else if (status == OPEN) {

            if (deltaY < 0) {
                return;
            }


            deltaY = (float) (-getMeasuredHeight() + deltaY * 0.2);
            offset = (int) deltaY;
        }


        scrollTo(0, -offset);

    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        final int pWidth = MeasureSpec.getSize(widthMeasureSpec);
        final int pHeight = MeasureSpec.getSize(heightMeasureSpec);

        final int childWidthMeasureSpec =
                MeasureSpec.makeMeasureSpec(pWidth, MeasureSpec.EXACTLY);
        final int childHeightMeasureSpec =
                MeasureSpec.makeMeasureSpec(pHeight, MeasureSpec.EXACTLY);

        View child;
        for (int i = 0; i < getChildCount(); i++) {
            child = getChildAt(i);
            // skip measure if gone
            if (child.getVisibility() == GONE) {
                continue;
            }

            measureChild(child, childWidthMeasureSpec, childHeightMeasureSpec);
        }

        setMeasuredDimension(pWidth, pHeight);
    }


    @Override
    protected void onFinishInflate() {
        super.onFinishInflate();

        Log.e(TAG, "onFinishInflate: getChildCount==" + getChildCount());

        if (getChildCount() < 2) {
            throw new RuntimeException("need 2 subView ");
        }

        upView = getChildAt(0);
        downView = getChildAt(1);

    }

    @Override
    protected void onLayout(boolean changed, int l, int t, int r, int b) {
        Log.e(TAG, "onLayout: offset==" + offset);
        Log.e(TAG, "onLayout: getChildCount==" + getChildCount());
        Log.e(TAG, "onLayout: l=" + l);
        Log.e(TAG, "onLayout: t=" + t);
        Log.e(TAG, "onLayout: r=" + r);
        Log.e(TAG, "onLayout: b=" + b);


        Log.e(TAG, "onLayout: aaaaaaaaaaaaaaaaaaa");

        upView = getChildAt(0);
        downView = getChildAt(1);

        if (upView.getVisibility() != GONE) {
            upView.layout(l, t + offset, r, b + offset);
        }


        if (downView.getVisibility() != GONE) {
            downView.layout(l, b + offset, r, 2 * b + offset - t);
        }
    }
}
