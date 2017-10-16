/**
 * Created by Rookie on 2017/9/29.
 */


import React, {PropTypes, Component} from 'react';
import {requireNativeComponent, View} from 'react-native';

var ViewPropTypes = require('ViewPropTypes');

class CustomScrollView extends Component {

    static propTypes = {
        ...ViewPropTypes,
    };


    render() {
        return (<NativeCustomScrollView>
            {this.props.children}
        </NativeCustomScrollView>)
    }
}


var NativeCustomScrollView = requireNativeComponent('CustomScrollView', CustomScrollView);

module.exports = CustomScrollView;