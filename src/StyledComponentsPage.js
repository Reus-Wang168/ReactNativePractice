/**
 * Created by Rookie on 2017/9/12.
 */
import React, {Component} from 'react';

import {View, Text} from 'react-native';

import styled from 'styled-components/native';

const MyText=styled.Text`
    color:palevioletred;
`;

export default class StyledComponentsPage extends Component {
    render() {
        return (<View>
            <Text>111111111</Text>
            <MyText>2222222</MyText>
        </View>);
    }
}