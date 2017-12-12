/**
 * Created by Rookie on 2017/12/5.
 */


import React, {Component} from 'react';

import styled from 'styled-components/native';


const StyledView = styled.View`
  flex:1;
  align-items: flex-start;
  justify-content: center;
  background: #31cd96;
`;

const StyledText = styled.Text`
  color: #000;
  font-size: 33px;
`;


export default class StyledcomponentsPage extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title
    });

    render() {
        return (<StyledView>
            <StyledText>11111111111111</StyledText>
        </StyledView>)
    }
}
