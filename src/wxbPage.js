import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


import glamorous, {ThemeProvider, withTheme} from 'glamorous-native';

import theme from './js/Theme';


import {Line_up_button, Line_up_image_button, Space} from './js/Common';

export default class StyleProject extends Component {

    onPress = () => {
        console.log('点击事件');
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <View style={styles.container}>
                    <Line_up_button onPress={this.onPress} content="排队"/>
                    <Space/>
                    <Line_up_image_button onPress={this.onPress} content="排队"/>
                </View>
            </ThemeProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});