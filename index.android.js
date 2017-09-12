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

const AppNav = StackNavigator({
    Home: {screen: AppIndex},
    Camera: {screen: Camera},
    Animation: {screen: Animations},
    Carousel: {screen: CarouselExample},
    StyledComponentsPage: {screen: StyledComponentsPage},
    GlamorousPage:{screen:GlamorousPage}
}, {
    navigationOptions: {
        header: null,
    }
});


AppRegistry.registerComponent('HelloRN', () => AppNav);
