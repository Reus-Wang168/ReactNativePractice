import React, {Component} from 'react';

import PropTypes from 'prop-types'

const ColorPropType = require('ColorPropType');
const invariant = require('fbjs/lib/invariant');

import Icons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';



function getRealSize(props) {

    console.log("the props in styled ==" + JSON.stringify(props));


    switch (props.size) {
        case 'large':
            return props.theme.icon.large;
        case 'middle':
            return props.theme.icon.middle;
        case 'small':
            return props.theme.icon.small;
        default:
            return props.size;
    }
}


const StyledImage = styled.Image`
   height:${props => getRealSize(props)};
   width:${props => getRealSize(props)};
`;


const StyledIcons = styled(Icons)`
  size:${props => getRealSize(props)}
`;

export default class Icon extends Component {


    constructor(props) {
        super(props);



        console.log("the props in constructor =" + JSON.stringify(props))

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
        size: 'middle',
        color: 'gray',
    };


    render() {

        const {name, size, color} = this.props;

        invariant(
            typeof name === 'string',
            'name is required,must be string'
        );


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


        // console.log("the value of name==" + Images[name]);
        if (Images[name]) {
            return (
                <StyledImage source={Images[name]} style={this.props.style} size={size}/>)
        } else {
            return (<Icons name={name} size={realSize} color={color} style={this.props.style}/>)
        }
    }
}