/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';


import RootView from './src/root-view';
class App extends Component {


    render() {
        return <RootView/>
    }
}


AppRegistry.registerComponent('HelloRN', () => App);
