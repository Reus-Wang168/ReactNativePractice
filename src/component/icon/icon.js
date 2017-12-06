import React, {Component} from 'react';
import {Image} from 'react-native';

import PropTypes from 'prop-types'


import Icons from 'react-native-vector-icons/Ionicons';

export default class Icon extends Component {


    constructor(props) {
        super(props);
    }

    static propTypes = {
        name: PropTypes.string.isRequired, // 图片名称
        size: PropTypes.number,  // 图标大小
        color: PropTypes.string, // 图片颜色
    };

    static defaultProps = {
        name: '',
        size: 12,
    };


    render() {

        const {name, size, color} = this.props;

        console.log("the value of name==" + Images[name]);
        if (Images[name]) {
            return (<Image source={Images[name]} style={[{width: size, height: size}, this.props.style]}/>)
        } else {
            return (<Icons name={name} size={size} color={color} style={this.props.style}/>)
        }
    }
}