/**
 * Created by mac on 2017/9/13.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import glamorous, {ThemeProvider, withTheme,TouchableOpacity} from 'glamorous-native';

import theme from './Theme';

export const Line_up_button = withTheme(({content, theme, onPress}) => (

    <TouchableOpacity onPress={onPress} style={{
        width: theme.screen_width / 2,
        height: theme.buttonHeight,
        borderRadius: theme.buttonBorderRadius,
        justifyContent: theme.center,
        alignItems: theme.center,
        backgroundColor: theme.theme_color,
        flexDirection: theme.row
    }}>
        <Text style={{fontSize: theme.body_text, color: theme.white_color}}>{content}</Text>
    </TouchableOpacity>
));


export const Space = withTheme(({content, theme, onPress}) => (


    <View style={{
        backgroundColor: theme.white_color,
        height: theme.space_4,
    }}/>

));


export const Line_up_image_button = withTheme(({content, theme, onPress}) => (

    <TouchableOpacity onPress={onPress} activityOpacity={0.7} style={{
        width: theme.screen_width / 2,
        height: theme.buttonHeight,
        borderRadius: theme.buttonBorderRadius,
        justifyContent: theme.center,
        alignItems: theme.center,
        backgroundColor: theme.theme_color,
        flexDirection: theme.row
    }}>
        <Image style={{width: theme.icon_6, height: theme.icon_6}} source={require("./radio-checked.png")}/>
        <Text style={{fontSize: theme.body_text, color: theme.white_color, marginLeft: theme.space_1}}>{content}</Text>
    </TouchableOpacity>

));

