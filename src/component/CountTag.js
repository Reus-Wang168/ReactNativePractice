/**
 * Created by Rookie on 2017/10/27.
 */
import React, {Component,PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,

} from 'react-native';


const {width, height} = Dimensions.get('window');

export default class CountTag extends Component {
    //属性声名
    static propTypes = {
        text: React.PropTypes
    };
    //默认属性
    static defaultProps = {
        fontSize: 12,//字体大小
        backgroundColor: 'white',//背景颜色
        borderColor: 'red',
        color: 'red',//字体颜色
        defaultWidth: 14,

    };

    //构造函数
    constructor(props) {
        super(props);
        this.state = { //状态机变量声明
        }
    }

    //渲染
    render() {
        return (
            <View
                style={[styles.contentStyle, this.props.style, {
                    backgroundColor: this.props.backgroundColor, borderWidth: 1, borderColor:
                    this.props.borderColor, minWidth: this.props.defaultWidth, height: this.props.defaultWidth
                }]}>
                <Text numberOfLines={1}
                      style={{
                          color: this.props.color,
                          fontSize: this.props.fontSize,
                          margin: 3
                      }}>{this.props.text}</Text>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    contentStyle: {
        borderRadius: 100,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    }
});