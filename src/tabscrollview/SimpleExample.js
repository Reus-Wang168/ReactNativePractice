import React,{Component} from 'react';
import {
    Text, View, ViewPagerAndroid, Dimensions, Image, StyleSheet, TouchableOpacity
} from 'react-native';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
let pics = require('./../pics.json');

import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import Swiper from 'react-native-swiper';





export default class SimpleExample extends Component {
    _goToPage = (params) => {
        console.log(params);
        console.log("--------------" + this.props.navigation);
        this.props.navigation.navigate(params);
    };


    render() {

        return <ScrollableTabView
            style={{marginTop: 20,}}
            initialPage={1}
            renderTabBar={() => <DefaultTabBar/>}
        >

            <View tabLabel='Tab #1' style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{width: screenW, height: screenH / 3}}>
                    <Swiper
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

                    </Swiper>

                    <TouchableOpacity onPress={() => {
                        this._goToPage('Home')
                    }}>
                        <Text style={{margin: 10, fontSize: 18, color: 'black'}}>go-bakc-Index</Text>
                    </TouchableOpacity>


                </View>
            </View>
            <Text tabLabel='Tab #2'>favorite</Text>
            <Text tabLabel='Tab #3'>project</Text>
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