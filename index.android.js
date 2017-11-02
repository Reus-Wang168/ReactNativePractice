/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import {StackNavigator} from 'react-navigation'


import AppIndex from './src/app';
import AppList from './src/appList';
import Camera from './src/BadInstagramCloneApp';
import Animations from './src/AnimationsPage';
import TabLayout from './src/TabLayout';
import MyViewPager from './src/MyViewPager';
import MyScrollViewPage from './src/MyScrollViewPage';
import ProductDetail from './src/ProductDetail';


import SimpleExample from './src/tabscrollview/SimpleExample';
import DynamicExample from './src/tabscrollview/DynamicExample';
import FaceBookExample from './src/tabscrollview/FacebookExample';
import ScrollableTabsExample from './src/tabscrollview/ScrollableTabsExample';
import OverlayExample from './src/tabscrollview/OverlayExample';
import IndexExample from './src/tabscrollview/IndexExample';
import SwiperExample from './src/SwiperExample';
import FlatListExample from './src/FlatListExample';


const AppNav = StackNavigator({
    Home: {screen: AppIndex},
    AppList: {screen: AppList},
    Camera: {screen: Camera},
    Animation: {screen: Animations},
    TabLayout: {screen: TabLayout},
    MyViewPager: {screen: MyViewPager},
    MyScrollViewPage: {screen: MyScrollViewPage},
    ProductDetail: {screen: ProductDetail},
    SimpleExample: {screen: SimpleExample},
    DynamicExample: {screen: DynamicExample},
    FaceBookExample: {screen: FaceBookExample},
    ScrollableTabsExample: {screen: ScrollableTabsExample},
    OverlayExample: {screen: OverlayExample},
    IndexExample: {screen: IndexExample},
    SwiperExample: {screen: SwiperExample},
    FlatListExample :{screen:FlatListExample}

}, {
    initialRouteName: 'Home',
    navigationOptions: {
        header: null,
    }
});


AppRegistry.registerComponent('HelloRN', () => AppNav);
