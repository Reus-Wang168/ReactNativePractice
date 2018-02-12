package com.reactnativepractice.customview;


import android.content.Context;
import android.support.v4.view.PagerAdapter;
import android.support.v4.view.ViewPager;
import android.view.View;
import android.view.ViewGroup;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Rookie on 2017/8/29.
 */

public class MyReactViewPager extends ViewPager {

    private class Adapter extends PagerAdapter {

        private List<View> mViews = new ArrayList<>();

        void addView(View child, int index) {
            mViews.add(index, child);
            notifyDataSetChanged();
            // This will prevent view pager from detaching views for pages that are not currently selected
            // We need to do that since {@link ViewPager} relies on layout passes to position those views
            // in a right way (also thanks to {@link ReactViewPagerManager#needsCustomLayoutForChildren}
            // returning {@code true}). Currently we only call {@link View#measure} and
            // {@link View#layout} after CSSLayout step.

            // TODO(7323049): Remove this workaround once we figure out a way to re-layout some views on
            // request
            setOffscreenPageLimit(mViews.size());
        }

        void removeViewAt(int index) {
            mViews.remove(index);
            notifyDataSetChanged();

            // TODO(7323049): Remove this workaround once we figure out a way to re-layout some views on
            // request
            setOffscreenPageLimit(mViews.size());
        }

        View getViewAt(int index) {
            return mViews.get(index);
        }

        @Override
        public int getCount() {
            return mViews.size();
        }

        @Override
        public Object instantiateItem(ViewGroup container, int position) {
            View view = mViews.get(position);
            container.addView(view, 0, generateDefaultLayoutParams());
            return view;
        }

        @Override
        public void destroyItem(ViewGroup container, int position, Object object) {
            View view = mViews.get(position);
            container.removeView(view);
        }

        @Override
        public boolean isViewFromObject(View view, Object object) {
            return view == object;
        }
    }


    public MyReactViewPager(Context context) {
        super(context);
        setAdapter(new Adapter());
    }


    @Override
    public Adapter getAdapter() {
        return (Adapter) super.getAdapter();
    }

    void addViewToAdapter(View child, int index) {
        getAdapter().addView(child, index);
    }

    void removeViewFromAdapter(int index) {
        getAdapter().removeViewAt(index);
    }

    int getViewCountInAdapter() {
        return getAdapter().getCount();
    }

    View getViewFromAdapter(int index) {
        return getAdapter().getViewAt(index);
    }
}
