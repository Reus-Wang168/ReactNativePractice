/**
 * Created by Rookie on 2017/10/31.
 */

import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import Screen from './common/Screen';

export default class SwiperExample extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title
    });
    render() {
        return (<View style={{flex: 1}}>

            <Swiper horizontal={true} height={Screen.height} loop={false} style={{flexDirection:'column'}}>
                <View style={{flex: 1, backgroundColor: '#ff728b', alignItems: 'center', justifyContent: 'center'}}><Text
                    style={{color: 'white', fontSize: 26}}>A</Text></View>
                <View style={{flex: 1, backgroundColor: '#31cd96', alignItems: 'center', justifyContent: 'center'}}><Text
                    style={{color: 'white', fontSize: 26}}>B</Text></View>
                <View style={{flex: 1, backgroundColor: '#3e77ff', alignItems: 'center', justifyContent: 'center'}}><Text
                    style={{color: 'white', fontSize: 26}}>C</Text></View>
            </Swiper>

        </View>)
    }
}
