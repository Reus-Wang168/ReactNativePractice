/**
 * Created by Rookie on 2017/8/31.
 */

import React, {Component} from 'react';
import {View, Animated, Text, TouchableOpacity, TouchableHighlight, Modal} from 'react-native';

import Screen from './common/Screen';

class AnimView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
            scaleAnim: new Animated.Value(1),
            colorAnim: 'red',
            modalVisible: false,
        };
    }

    componentDidMount() {
        Animated.timing(                            // 随时间变化而执行的动画类型
            this.state.fadeAnim,                      // 动画中的变量值
            {
                toValue: 1,                             // 透明度最终变为1，即完全不透明
            },
            this.state.scaleAnim,
            {
                toValue: 100,
            },
            this.state.colorAnim, {
                toValue: 'green'
            },
        ).start();                                  // 开始执行动画
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={{flex: 1}}>

                <Animated.View                            // 可动画化的视图组件
                    style={{
                        ...this.props.style,
                        opacity: this.state.fadeAnim, // 将透明度指定为动画变量值
                        marginTop: this.state.scaleAnim,
                        backgroundColor: this.state.colorAnim,
                    }}
                >
                    {this.props.children}
                </Animated.View>

                <TouchableHighlight style={{position: 'absolute', right: 10, top: 10}} onPress={() => {
                    this.setModalVisible(true)
                }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>

                <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        // alert("Modal has been closed.")
                    }}
                >
                    <View style={{flex: 1, marginTop: 0, backgroundColor: 'transparent', alignItems: 'flex-end'}}>


                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(false)
                        }}>
                            <View style={{
                                marginTop: 50,
                                backgroundColor: 'transparent',
                                flex: 1,
                                width: Screen.width,
                                alignItems: 'flex-end'
                            }}>

                                <View style={{
                                    width: Screen.width / 3,
                                    backgroundColor: '#fff',
                                    marginRight: 10,
                                    borderRadius: 5,
                                }}>


                                    <TouchableHighlight onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible)
                                    }} style={{margin: 8}}>
                                        <Text>Setting</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible)
                                    }} style={{margin: 8}}>
                                        <Text>Setting</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible)
                                    }} style={{margin: 8}}>
                                        <Text>Setting</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible)
                                    }} style={{margin: 8}}>
                                        <Text>Setting</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible)
                                    }} style={{margin: 8}}>
                                        <Text>Setting</Text>
                                    </TouchableHighlight>

                                </View>
                            </View>


                        </TouchableOpacity>


                    </View>


                </Modal>
            </View>


        );
    }
}


export default class AnimationsPage extends Component {
    render() {
        return (
            <View ref="anims" style={{flex: 1, backgroundColor: '#03a9f4'}}>
                <AnimView style={{width: 250, height: 50,}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </AnimView>
            </View>
        )
    }
}