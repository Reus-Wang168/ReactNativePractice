/**
 * Created by Rookie on 2017/12/19.
 */
import React, {Component} from 'react';
import {Dimensions, ToastAndroid, Platform, BackHandler} from 'react-native';

import styled from 'styled-components/native';
import Toast from '../component/toast/toast';


const StyledView = styled.View`
  flex: 1px;
  padding: 10px;
`;

import util from '../common/util';

const StyledButtonWrapper = styled.View`margin: 10px`;
const StyledButton = styled.Button``;
const StyledInputText = styled.TextInput`margin: 10px`;
let array = [11, 33, 2, 100, 12, 89, 12, 1, 100, 4, 123, 8, 9, 19];

export default class ToastExample extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.routeName
    });


    constructor(props) {
        super(props);
        this.state = {
            show: false,
            image: '',
            content: 'loading',
            duration: 0,
            hide: false,
            loading: false,
        };
    }

    _showOnlyText = () => {

        this.setState({
            show: true,
            content: '我是只有文本的Toast',
            image: '',
            duration: 2000,
        });
    };
    _showBasic = () => {

        this.setState({
            content: '收藏成功',
            image: 'md-star-outline',
            duration: 2000,
        });

    };


    _showLoading1 = () => {

        this.setState({
            image: '',
            loading: true,
            content: '我是显示时长为short的Toast',
            duration: 'short',
        });


        console.log("length ==" + array.length);
        for (let i = 0; i < array.length; i++) {
            console.log(i + "  === " + array[i]);
        }

        // util.selectSort(array);

        // util.bubbleSort(array);


        util.insertSort(array);

    };
    _showLoading2 = () => {

        this.setState({
            image: '',
            loading: true,
            content: '我是显示时长为long的Toast',
            duration: 'long',
        });

    };
    _showLoadingCustom = () => {

        this.setState({
            content: 'loading',
            loading: true,
            duration: 0,
            hide: false,
        });


        setTimeout(() => {
            this.setState({
                hide: true,
            });
        }, 4000)

    };

    _hideWithBackPress = () => {

        this.setState({
            content: 'loading',
            loading: true,
            duration: 0,
            hide: false,
        });
    };


    render() {
        return <StyledView>


            <StyledInputText placeholder={'please input duration'}/>

            <StyledButtonWrapper>
                <StyledButton title={"只有文本的Toast"} onPress={this._showOnlyText}/>
            </StyledButtonWrapper>
            <StyledButtonWrapper>
                <StyledButton title={"包含图片和文本的Toast"} onPress={this._showBasic}/>
            </StyledButtonWrapper>
            <StyledButtonWrapper>
                <StyledButton title={"Loading 效果 Toast duration=short"} onPress={this._showLoading1}/>
            </StyledButtonWrapper>
            <StyledButtonWrapper>
                <StyledButton title={"Loading 效果 Toast duration=long"} onPress={this._showLoading2}/>
            </StyledButtonWrapper>
            <StyledButtonWrapper>
                <StyledButton title={"自己控制loading显示时长(4秒)"} onPress={this._showLoadingCustom}/>
            </StyledButtonWrapper>
            <StyledButtonWrapper>
                <StyledButton title={"一直显示，按返回键后隐藏（Android)"} onPress={this._hideWithBackPress}/>
            </StyledButtonWrapper>
            <StyledButtonWrapper>
                <StyledButton title={"一直显示，点击显示区域外隐藏"} onPress={this._hideWithBackPress}/>
            </StyledButtonWrapper>

            <Toast image={this.state.image}
                   loading={this.state.loading}
                   content={this.state.content}
                   duration={this.state.duration}
                   hide={this.state.hide}/>

        </StyledView>;
    }


    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onHardBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress')
        }
    }


    onHardBackAndroid = () => {
        console.log("current navigation state==" + JSON.stringify(this.props.navigation));
        if (!this.state.hide) {
            this.setState({
                hide: true,
            });
        }
    }
}