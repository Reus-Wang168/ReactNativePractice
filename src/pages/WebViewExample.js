import React, { Component } from "react";

import { View, WebView, Text } from "react-native";

export default class WebViewExample extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.routeName
    });

    render() {
        return (
            <View style={{ flex: 1 }}>
                <WebView
                    bounces={false}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    scalesPageToFit={true}
                    source={{
                        uri: "http://www.baidu.com"
                    }}
                />
            </View>
        );
    }
}
