import React, {Component} from 'react';
import {
    Modal,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Button,
    ActivityIndicator,
    ToastAndroid, TextInput,
} from 'react-native';
import IconLoader from './component/icon/icon'

import invariant from '../node_modules/fbjs/lib/invariant'


const {width, height} = Dimensions.get('window');


class Toast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
        };

        console.log("constructor")
    }


    componentDidUpdate() {
        console.log(new Date().toLocaleTimeString() + "  :componentDidUpdate");
    }


    render() {


        return (

            <Modal
                animationType={"fade"}
                transparent={true}
                visible={this.props.show}
                onRequestClose={() => {

                }}
            >


                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: width,
                    height: height
                }}>
                    <View style={{
                        width: 150, height: 150, alignItems: 'center', borderRadius: 5,
                        justifyContent: 'center', backgroundColor: 'black', opacity: 0.8
                    }}>

                        {this.props.image === 'loading' ? (
                            <ActivityIndicator size={'large'} color={'white'}/>
                        ) : (<IconLoader name={this.props.image} size={33} color={'white'}/>)}


                        <Text style={{color: 'white', marginTop: 10, fontSize: 20}}>{this.props.name}</Text>
                    </View>
                </View>

            </Modal>
        )


    }
}


export default class ModalPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            duration: '2000',
            image: '',
            name: '',
            inputText: ''
        };
    }


    setModalVisible(show) {

        this.setState({
            modalVisible: show,
        })

    }

    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{marginTop: 22}}>
                <Toast ref='s' name={this.state.name} image={this.state.image} show={this.state.modalVisible}
                />
                <TouchableOpacity
                    activeOpacity={0}
                    onPress={() => {
                        this.setState({
                            image: 'md-star-outline',
                            name: '收藏成功',
                        });
                        this.setModalVisible(true);

                        this.timer = setTimeout(() => {
                            this.setModalVisible(false);
                        }, 2000)
                    }}>
                    <Text style={{
                        borderWidth: 1,
                        borderRadius: 5,
                        padding: 10,
                        marginLeft: 40,
                        marginRight: 40
                    }}>收藏成功</Text>
                </TouchableOpacity>


                <View style={{marginLeft: 40, marginRight: 40, marginTop: 10}}>
                    <Button
                        title={'loading'} onPress={() => {
                        this.setState({
                            image: 'loading',
                            name: '',
                            duration: -1,
                        });
                        this.setModalVisible(true);


                        this.timer = setTimeout(() => {
                            this.setModalVisible(false);
                        }, 5000)
                    }}/>
                </View>


                <View style={{marginLeft: 40, marginRight: 40, marginTop: 50}}>
                    <TextInput
                        style={{fontSize: 22}}
                        onChangeText={
                            (text) => {
                                this.setState({
                                        inputText: text
                                    }
                                )
                            }
                        }

                    />
                </View>
                <View style={{marginLeft: 40, marginRight: 40, height: 80}}>
                    <Text>{this.state.inputText}</Text>
                </View>
                <View style={{marginLeft: 40, marginRight: 40, marginTop: 20}}>
                    <Button
                        title={'AndroidToast'} onPress={() => {
                        ToastAndroid.show(this.state.inputText, ToastAndroid.SHORT);
                    }}/>
                </View>


                <View style={{marginLeft: 40, marginRight: 40, marginTop: 20}}>
                    <Button
                        title={'TextInput ?=Android'} onPress={() => {
                        invariant(
                            this.state.inputText === 'Android',
                            "This is a throw message"
                        );
                        ToastAndroid.show(this.state.inputText, ToastAndroid.SHORT);
                    }}/>
                </View>
            </View>
        );
    }
}