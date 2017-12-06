/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppConfig,
    AppRegistry,
} from 'react-native';

import {StackNavigator} from 'react-navigation'


import AppIndex from './src/app';
import AppList from './src/appList';
import Camera from './src/BadInstagramCloneApp';
import Animations from './src/AnimationsPage';
import MyViewPager from './src/MyViewPager';
import MyScrollViewPage from './src/MyScrollViewPage';
import ProductDetail from './src/ProductDetail';
import VectorIcons from './src/VectorIconsPage';


import SimpleExample from './src/tabscrollview/SimpleExample';
import DynamicExample from './src/tabscrollview/DynamicExample';
import FaceBookExample from './src/tabscrollview/FacebookExample';
import ScrollableTabsExample from './src/tabscrollview/ScrollableTabsExample';
import OverlayExample from './src/tabscrollview/OverlayExample';
import DefaultTabBarPage from './src/tabscrollview/DefaultTabBarPage';
import IndexExample from './src/tabscrollview/IndexExample';
import SwiperExample from './src/SwiperExample';
import FlatListExample from './src/FlatListExample';
import ImgCachePage from './src/ImgCachePage';
import IconLoader from './src/IconLoaderPage';
import ModalPage from './src/ModalPage';
import StyledcomponentsPage from './src/StyledcomponentsPage';


const AppNav = StackNavigator({
    Home: {screen: AppIndex},
    AppList: {screen: AppList},
    Camera: {screen: Camera},
    Animation: {screen: Animations},
    MyViewPager: {screen: MyViewPager},
    MyScrollViewPage: {screen: MyScrollViewPage},
    ProductDetail: {screen: ProductDetail},
    SimpleExample: {screen: SimpleExample},
    DynamicExample: {screen: DynamicExample},
    FaceBookExample: {screen: FaceBookExample},
    DefaultTabBarPage: {screen: DefaultTabBarPage},
    ScrollableTabsExample: {screen: ScrollableTabsExample},
    OverlayExample: {screen: OverlayExample},
    IndexExample: {screen: IndexExample},
    SwiperExample: {screen: SwiperExample},
    FlatListExample: {screen: FlatListExample},
    VectorIconsPage: {screen: VectorIcons},
    ImgCachePage: {screen: ImgCachePage},
    IconLoaderPage: {screen: IconLoader},
    ModalPage: {screen: ModalPage},
    StyledcomponentsPage: {screen: StyledcomponentsPage},


}, {
    initialRouteName: 'Home',
    navigationOptions: {
        header: null,
    }
});


AppRegistry.registerComponent('HelloRN', () => AppNav);
