/**
 * Created by Rookie on 2017/10/26.
 */


import React, {Component} from 'react';

import {View, Button, Dimensions} from 'react-native';

export default class IndexExample extends Component {


    _goToPage = (params) => {
        this.props.navigation.navigate(params);
    };

    render() {
        return (<View style={{flex: 1}}>
            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                <Button
                    title='SimpleExample'
                    onPress={() => {
                        this._goToPage('SimpleExample')
                    }}
                />
            </View>
            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                <Button
                    title='DynamicExample'
                    onPress={() => {
                        this._goToPage('DynamicExample')
                    }}
                />
            </View>
            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                <Button
                    title='FaceBookExample'
                    onPress={() => {
                        this._goToPage('FaceBookExample')
                    }}
                />
            </View>
            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                <Button
                    title='ScrollableTabsExample'
                    onPress={() => {
                        this._goToPage('ScrollableTabsExample')
                    }}
                />
            </View>
            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                <Button
                    title='OverlayExample'
                    onPress={() => {
                        this._goToPage('OverlayExample')
                    }}
                />
            </View>
        </View>)
    }
}