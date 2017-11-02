/**
 * Created by Rookie on 2017/9/28.
 */

import React, {Component} from 'react';

import {
    View, Dimensions, Text, ScrollView, TouchableOpacity, ViewPagerAndroid, Image, Modal,
    TouchableHighlight
} from 'react-native';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

import Carousel from 'react-native-looped-carousel';


let pics = require('./pics.json');

let items = ['商品', '详情', '评论'];

class Tab extends Component {

    constructor(props) {
        super(props);


    }

    _renderContent = () => {

        let selectedIndex = this.props.selectedIndex;

        let select = this.props.select;

        let views = [];

        items.map(function (item, index) {


            let view = (
                <TouchableOpacity key={index} onPress={() => {select(index)}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{margin: 10, fontSize: selectedIndex === index ? 18 : 15,}}>{item}</Text>

                        {selectedIndex === index ? (
                            <View style={{width: 20, height: 2, backgroundColor: 'black'}}/>) : (<View/>)}
                    </View>
                </TouchableOpacity>
            );

            views.push(view);

        });


        return views;
    };

    render() {
        return (<ScrollView
            horizontal={true}
            contentContainerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: screenW
            }}>
            {this._renderContent()}

        </ScrollView>)
    }
}


export default class TabLayout extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            swipe: false,
        }
    }

    _onPageChange = (p) => {
        this.setState({
            selectedIndex: p,
        });

        if(p===0) {
            this.setState({swipe: false})
        }

    };

    _onSubPageChange = (p) => {
        if (p === 2) {
            this.setState({swipe: true})
        } else {
            this.setState({swipe: false})
        }
    };


    _onPageSelected = (index) => {
        this.refs.Carousel.animateToPage(index);
    };




    render() {
        return <View>
            <Tab selectedIndex={this.state.selectedIndex}
                 select={(index) => this._onPageSelected(index)}/>
            <Carousel
                ref='Carousel'
                swipe={true}
                autoplay={false}
                style={{width: screenW, height: screenH}}
                onAnimateNextPage={(p) => this._onPageChange(p)}
            >
                <View style={{
                    backgroundColor: '#BADA55',
                    width: screenW,
                    height: screenH,
                }}>
                    <Carousel style={{width: screenW, height: screenH / 3}}
                              autoplay={false}
                              bullets={true}
                              onAnimateNextPage={(p) => this._onSubPageChange(p)}
                    >

                        <Image style={{
                            width: screenW,
                            height: screenH / 3,
                        }} source={{uri: pics[0]}}/>
                        <Image style={{
                            width: screenW,
                            height: screenH / 3,
                        }} source={{uri: pics[11]}}/>
                        <Image style={{
                            width: screenW,
                            height: screenH / 3,
                        }} source={{uri: pics[29]}}/>


                    </Carousel>

                    <Text>{items[0]}</Text>


                </View>
                <View style={{
                    backgroundColor: '#31cd96',
                    width: screenW,
                    height: screenH,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}><Text>{items[1]}</Text></View>
                <View style={{
                    backgroundColor: '#daaaba',
                    width: screenW,
                    height: screenH,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}><Text>{items[2]}</Text></View>

            </Carousel>
        </View>
    }
}