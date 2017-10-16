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


import AppIndex from './src/AppIndex';
import Camera from './src/BadInstagramCloneApp';
import Animations from './src/AnimationsPage';
import CarouselExample from './src/CarouselExample';
import StyledComponentsPage from './src/StyledComponentsPage';
import GlamorousPage from './src/GlamorousPage';
import ExamplePage from './src/common/example';
import ExamplePage2 from './src/common/example2';
import StyleProject from './src/wxbPage';
import TabLayout from './src/TabLayout';
import MyViewPager from './src/MyViewPager';
import MyScrollViewPage from './src/MyScrollViewPage';

const AppNav = StackNavigator({
    Home: {screen: AppIndex},
    Camera: {screen: Camera},
    Animation: {screen: Animations},
    Carousel: {screen: CarouselExample},
    StyledComponentsPage: {screen: StyledComponentsPage},
    GlamorousPage: {screen: GlamorousPage},
    ExamplePage: {screen: ExamplePage},
    ExamplePage2: {screen: ExamplePage2},
    StyleProject: {screen: StyleProject},
    TabLayout: {screen: TabLayout},
    MyViewPager: {screen: MyViewPager},
    MyScrollViewPage:{screen:MyScrollViewPage}


}, {
    initialRouteName: 'Home',
    navigationOptions: {
        header: null,
    }
});


AppRegistry.registerComponent('HelloRN', () => AppNav);
