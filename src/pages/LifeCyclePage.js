/**
 * Created by Rookie on 2017/12/21.
 */
import React, {Component} from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;


const SquareView = styled.View`
    height: 200px;
    width: 200px;
    background-color: #33b5e5;
`;

class CustomView extends Component {
    render() {
        return (<SquareView/>)
    }



}


export default class LifeCyclePage extends Component {


    static navigationOptions = ({navigation}) => ({
        title: navigation.state.routeName
    });

    render() {

        console.log("render");

        return (<StyledView>
            <CustomView/>
        </StyledView>)
    }


    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }


}