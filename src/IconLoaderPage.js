/**
 * Created by Rookie on 2017/11/28.
 */
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    Button,
} from 'react-native';

import {StyledScrollView, StyledTextInput, BeautyTextInput} from "./IconPageComponents";

import IconLoader from './component/icon/icon';
import styled, {ThemeProvider} from 'styled-components/native';


const StyledHorizontalView = styled.View`
   flex-direction:row;
   align-items: center;
    margin: 5px;
`;

const StyledText = styled.Text`
  font-size: 18px;
  color: #000;
  margin-right: 18px;
`;

const StyledView = styled.View`
  align-items: center;
  justify-content: center;
  background: whitesmoke;
`;


const StyledTitle = StyledText.extend`
  font-size: 24px;
`;


export default class IconLoaderPage extends Component<{}> {


    constructor(props) {
        super(props)

    }

    onPress = () => {
        this.props.navigation.navigate('Home')
    };

    _onChangeText = (text) => {
        console.log("the text ==" + text);
    };

    render() {


        return (
            <StyledScrollView>
                <StyledView>
                    <StyledTextInput/>
                    <BeautyTextInput
                        multiline={true}
                        autoGrow={true}
                        placeholder={'please input something !'}
                        onChangeText={(text) => this._onChangeText(text)}
                    />
                    <StyledTitle>Icon !</StyledTitle>
                    <StyledTitle>Basic </StyledTitle>
                    <StyledHorizontalView>
                        <StyledText>ios-share(iconfont)</StyledText>
                        <IconLoader name={'ios-share'} size={55}/>
                    </StyledHorizontalView>
                    <StyledHorizontalView>
                        <StyledText>shares(png)</StyledText>
                        <IconLoader name={'shares'} size={55}/>
                    </StyledHorizontalView>


                    <Text style={{color: 'black', margin: 10, fontSize: 22}}>Size </Text>


                    <StyledHorizontalView>
                        <StyledText>ios-share(large)</StyledText>
                        <IconLoader name={'md-share'} size={'large'}/>
                    </StyledHorizontalView>


                    <StyledHorizontalView>
                        <StyledText>ios-share(middle)</StyledText>
                        <IconLoader name={'md-share'} size={'middle'}/>
                    </StyledHorizontalView>


                    <StyledHorizontalView>
                        <StyledText>ios-share(small)</StyledText>
                        <IconLoader name={'md-share'} size={'small'}/>
                    </StyledHorizontalView>

                    <StyledHorizontalView>
                        <StyledText>ios-share(default)</StyledText>
                        <IconLoader name={'md-share'} />
                    </StyledHorizontalView>

                    <StyledHorizontalView>
                        <StyledText>ios-share(large)</StyledText>
                        <IconLoader name={'shares'} size={'large'}/>
                    </StyledHorizontalView>


                    <StyledHorizontalView>
                        <StyledText>ios-share(middle)</StyledText>
                        <IconLoader name={'shares'} size={'middle'}/>
                    </StyledHorizontalView>


                    <StyledHorizontalView>
                        <StyledText>ios-share(small)</StyledText>
                        <IconLoader name={'shares'} size={'small'}/>
                    </StyledHorizontalView>


                    <View style={{
                        opacity: 30,
                        width: 100,
                        height: 100,
                        backgroundColor: '#161616',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                    }}>
                        <ActivityIndicator color={'white'} size={'large'}/>
                    </View>

                    <View style={{marginTop: 10}}>
                        <Button title={'button'} onPress={
                            this.onPress
                        }/>
                    </View>


                </StyledView>
            </StyledScrollView>
        );
    }
}


