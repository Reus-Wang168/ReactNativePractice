import React, {Component} from 'react'

import glamorous from 'glamorous-native'

const {View, Text, TouchableOpacity, TouchableHighlight} = glamorous;

const InstructionText = glamorous.text({
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
});

import GreenButton from './common/_Green_Button';
import WhiteText from './common/_White_Text';
import RedButton from './common/_Red_Button';
import RoundButton from './common/_Round_Button';
import BlueButton from './common/_Blue_Round_Button';
import Button from './common/_Button';


export default class GlamorousPage extends Component {
    _clickEvent = (msg) => {
        console.log("msg====" + msg);
        alert(msg)
    };


    render() {
        return (
            <View flex={1} backgroundColor="#F5FCFF" justifyContent="flex-start" alignItems="center">
                <Text fontSize={20} textAlign="center" margin={10}>
                    Look! No Styles!
                </Text>
                <InstructionText>
                    To get started, edit example.js
                </InstructionText>
                <InstructionText>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </InstructionText>
                <TouchableOpacity onPress={() => this._clickEvent('green')}>
                    <GreenButton>
                        <WhiteText>确认</WhiteText>
                    </GreenButton>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._clickEvent('green')}>
                    <RoundButton>
                        <WhiteText>确认</WhiteText>
                    </RoundButton>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._clickEvent('green')} activeOpacity={0.7}>
                    <BlueButton>
                        <WhiteText>确认-activeOpacity 0.7</WhiteText>
                    </BlueButton>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._clickEvent('green')}>
                    <RoundButton>
                        <WhiteText>确认</WhiteText>
                    </RoundButton>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._clickEvent('green')} activeOpacity={0.5}>
                    <Button style={{backgroundColor:'red'}}>
                        <WhiteText>长长的按钮长这样 activeOpacity 0.5</WhiteText>
                    </Button>
                </TouchableOpacity>

                <TouchableHighlight
                    underlayColor={'white'}
                    onPress={this._clickEvent}>
                    <RedButton>
                        <WhiteText>取消</WhiteText>
                    </RedButton>
                </TouchableHighlight>

            </View>
        )
    }
}