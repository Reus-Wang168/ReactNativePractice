/**
 * Created by Rookie on 2018/1/4.
 */


import React, {Component} from 'react';

import {View, TextInput, Text, StyleSheet, Dimensions, KeyboardAvoidingView, ScrollView, Keyboard} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class KeyBoardUsePage extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.routeName
    });

    constructor(props) {
        super(props);

        this.state = ({
            keyboardState: 'close',
            inputContent: ''
        });
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    _keyboardDidShow = () => {

        this.setState({
            keyboardState: 'open'
        })
    };

    _keyboardDidHide = () => {

        this.setState({
            keyboardState: 'close'
        })
    };

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _onChangeText = (text) => {
        this.setState({
            inputContent: text
        })
    };

    _beginSearch=()=>{
        let keyword=this.state.inputContent;

        console.log("begin search with keyword "+keyword);

        Keyboard.dismiss;
    };


    render() {
        return (<View style={styles.container}>
            <ScrollView style={{height: height}}>
                <Text style={styles.TitleView}>How to Use KeyBoard</Text>

                <TextInput style={styles.inputStyle} placeholder={"please input something"}
                           autoFocus={true}
                           onEndEditing={this._beginSearch}
                           onSubmitEditing={this._beginSearch}
                           onChangeText={this._onChangeText}/>

                <Text style={{
                    fontSize: 18,
                    color: 'red',
                    alignSelf: 'center',
                    margin: 5
                }}>键盘状态：{this.state.keyboardState}</Text>

                <Text style={{
                    fontSize: 18,
                    color: 'black',
                    alignSelf: 'center',
                    margin: 10
                }}>输入内容：{this.state.inputContent}</Text>

                <View style={{height: 400}}/>
                <TextInput style={styles.inputBottomStyle} placeholder={"在屏幕底部的input，键盘弹起如何不被挡住"}
                           onEndEditing={this._beginSearch}
                           onSubmitEditing={this._beginSearch}
                           onChangeText={this._onChangeText}
                           multiline={true}/>
            </ScrollView>

        </View>)
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    avoidViewStyle: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    TitleView: {
        alignSelf: 'center',
        margin: 10,
        color: 'black',
        fontSize: 22
    },
    inputStyle: {
        width: width,
        margin: 10,
    },
    inputBottomStyle: {
        width: width,
        margin: 10,
    }
});