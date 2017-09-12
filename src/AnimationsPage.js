/**
 * Created by Rookie on 2017/8/31.
 */

import React, {Component} from 'react';
import {View, Animated, Text, TouchableOpacity} from 'react-native';


class AnimView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
            scalAnim: new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.timing(                            // 随时间变化而执行的动画类型
            this.state.fadeAnim,                      // 动画中的变量值
            {
                toValue: 1,                             // 透明度最终变为1，即完全不透明
            },
            this.state.scalAnim,
            {
                toValue: 10,
            }
        ).start();                                  // 开始执行动画
    }

    render() {
        return (


            <Animated.View                            // 可动画化的视图组件
                style={{
                    ...this.props.style,
                    opacity: this.state.fadeAnim, // 将透明度指定为动画变量值
                    marginTop: this.state.scalAnim * 10,
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}


export default class AnimationsPage extends Component {
    render() {
        return (
            <View ref="anims" style={{flex: 1, backgroundColor: '#03a9f4'}}>
                <AnimView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </AnimView>
            </View>
        )
    }
}