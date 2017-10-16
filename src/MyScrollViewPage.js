/**
 * Created by Rookie on 2017/9/29.
 */
import React, {Component} from 'react';

import {View, Dimensions, Text, ScrollView} from 'react-native';

const {width, height} = Dimensions.get('window');

import CustomScrollView from './CustomScrollView';


class UpView extends Component {
    render() {
        return (<View>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
            <Text>up</Text>
        </View>)
    }
}

export default class MyScrollViewPage extends Component {

    render() {
        return (
            <CustomScrollView>
                <ScrollView contentContainerStyle={{backgroundColor: '#de5c63', width: width, alignItems: 'center'}}>
                    <UpView/>
                </ScrollView>
                <View style={{backgroundColor: '#54d9a6', width: width,}}>
                    <Text>down</Text>
                </View>
            </CustomScrollView>

        )
    }
}




