import React, {Component} from 'react';
import {
    Text, View, ViewPagerAndroid, Dimensions, Image, StyleSheet, TouchableOpacity, ScrollView, Switch, TextInput
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
let pics = require('./../pics.json');

import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import Swiper from 'react-native-swiper';


export default class SimpleExample extends Component {


    static navigationOptions = ({navigation}) => ({
        title: navigation.state.routeName
    });


    constructor(props) {
        super(props);

        this.state = ({
            showSwiper: false,
            scrollable: false,
        })
    }


    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                showSwiper: true,
            })
        }, 1)
    }


    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    _onValueChanged = (value) => {
        console.log("the value = " + value)
        this.setState({
            scrollable: value,
        })
    };

    render() {

        return <ScrollableTabView
            locked={this.state.scrollable}
            style={{marginTop: 0,}}
            initialPage={0}
            renderTabBar={() => <DefaultTabBar
                underlineStyle={{backgroundColor: '#31cd96', height: 2}}/>}
        >

            <View tabLabel='销量' style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{width: screenW, height: screenH / 3}}>
                    {this.state.showSwiper ? (<Swiper
                        loop={false}
                        index={0}
                        autoplay={false}
                        autoplayTimeout={2}
                        horizontal={true}
                        pagingEnabled
                        showsPagination={true}
                        height={screenH / 3}
                        contentContainerStyle={[styles.contentContainer, {flexDirection: 'row'}]}
                        dotColor="black"
                        activeDotColor="red"
                        paginationStyle={{width: 50, height: 20, left: screenW / 2 - 50 / 2, bottom: -5}}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                        }}
                        activeDotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                        }}
                    >
                        <Image style={{
                            width: screenW,
                            height: screenH / 3,
                        }} source={require('./../localdata/Hydrangeas.jpg')}/>
                        <Image style={{
                            width: screenW,
                            height: screenH / 3,
                        }} source={{uri: pics[25]}}/>
                        <Image style={{
                            width: screenW,
                            height: screenH / 3,
                        }} source={{uri: pics[29]}}/>

                    </Swiper>) : (<View style={{width: screenW, height: screenH / 3, backgroundColor: 'white'}}/>)}


                    <Switch style={{margin: 10}} value={this.state.scrollable}
                            onValueChange={(value) => this._onValueChanged}/>

                    <TextInput value={'11111'}/>

                </View>
            </View>
            <Text tabLabel='上架时间'>project</Text>

            <ScrollView tabLabel='价格'>
                <View style={{flex: 1}}>
                    <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[11]}}/>
                    <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[20]}}/>
                    <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[30]}}/>
                    <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[40]}}/>
                    <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[50]}}/>
                    <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[0]}}/>
                    <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[10]}}/>

                </View>
            </ScrollView>
            <ScrollView tabLabel='筛选' showsVerticalScrollIndicator={false}
                        contentContainerStyle={{alignItems: 'center'}}>
                <Icon name='logo-android' color='#A4C639' size={300} style={styles.icon}/>
                <Icon name='logo-apple' color='black' size={300} style={styles.icon}/>
                <Icon name='logo-angular' color='brown' size={300} style={styles.icon}/>
                <Icon name='logo-python' color='#A4C639' size={300} style={styles.icon}/>
                <Icon name='logo-google' color='#31cd96' size={300} style={styles.icon}/>
                <Icon name='logo-html5' color='brown' size={300} style={styles.icon}/>
            </ScrollView>
        </ScrollableTabView>;
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        margin: 10,
        color: 'black',
        fontSize: 16,
        fontWeight: 'normal'
    },
    title_1: {
        marginLeft: 10,
        color: 'red'
    },
    contentContainer: {
        width: 2 * screenW,
        height: 200,
    },
});