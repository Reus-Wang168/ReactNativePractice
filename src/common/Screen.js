import React, {Component} from 'react';
import {
   Dimensions,
   PixelRatio

} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const pxWidth = 1/PixelRatio.get();


const object = {
    width:width,
    height:height,
    pxWidth:pxWidth
};

export default object;

