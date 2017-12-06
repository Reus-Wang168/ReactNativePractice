import React, {Component} from 'react';

import PropTypes from 'prop-types'


import Icons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import Images from '../../resource/Images';

const StyledImage = styled.Image``;
const ColorPropType = require('ColorPropType');

export default class Icon extends Component {


    constructor(props) {
        super(props);
    }

    static propTypes = {

        /**
         *  所使用icon名称
         */
        name: PropTypes.string.isRequired,

        /**
         * 图标大小，可以使用number或['small,middle,large'],默认为[small]
         */
        size: PropTypes.oneOfType([
            PropTypes.oneOf(['small', 'middle', 'large']),
            PropTypes.number,
        ]),

        /**
         * 图标颜色,默认为gray,可用的类型
         *
         * '#f0f' (#rgb)
         * '#f0fc' (#rgba)
         * '#ff00ff' (#rrggbb)
         * '#ff00ff00' (#rrggbbaa)
         * 'rgb(255, 255, 255)'
         * 'rgba(255, 255, 255, 1.0)'
         * 'hsl(360, 100%, 100%)'
         * 'hsla(360, 100%, 100%, 1.0)'
         * 'transparent'
         * 'red'
         * '0xff00ff00 (0xrrggbbaa)'
         */
        color: ColorPropType
    };

    static defaultProps = {
        name: '',
        size: 'small',
        color: 'gray'

    };


    render() {

        const {name, size, color} = this.props;
        let realSize;
        switch (size) {
            case 'small':
                realSize = 12;
                break;
            case 'middle':
                realSize = 24;
                break;
            case 'large':
                realSize = 36;
                break;
            default:
                realSize = size;
        }


        console.log("the value of name==" + Images[name]);
        if (Images[name]) {
            return (
                <StyledImage source={Images[name]} style={[{width: realSize, height: realSize}, this.props.style]}/>)
        } else {
            return (<Icons name={name} size={realSize} color={color} style={this.props.style}/>)
        }
    }
}