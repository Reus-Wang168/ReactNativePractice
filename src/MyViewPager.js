/**
 * Created by Rookie on 2017/9/28.
 */

import React, {Component} from 'react';

import {View, Dimensions, Text, ScrollView, TouchableOpacity, Image, ViewPagerAndroid} from 'react-native';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;


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
                <TouchableOpacity key={index} onPress={() => {
                    select(index)
                }
                }>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{
                            margin: 10,
                            fontSize: selectedIndex === index ? 18 : 15,
                        }}>{item}</Text>

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


export default class MyViewPager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            swipe: false,
            height: screenH / 3 - 0.01,
            width: screenW - 0.01,
        }
    }

    _onPageChange = (p) => {
        console.log("p=====" + p.nativeEvent.position);

        this.setState({
            selectedIndex: p.nativeEvent.position,
        });


    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                height: screenH / 3,
                width: screenW,
            });
        }, 2000);
    }

    _onSubPageChange = (p) => {
        if (p === 2) {
            this.setState({swipe: true})
        } else {
            this.setState({swipe: false})
        }
    };


    _onPageSelected = (index) => {
        this.refs.Carousel.setPage(index);
    };


    render() {
        return <View>
            <Tab selectedIndex={this.state.selectedIndex}
                 select={(index) => this._onPageSelected(index)}/>
            <ViewPagerAndroid
                ref='Carousel'
                style={{width: screenW, height: screenH}}
                onPageSelected={(index) => this._onPageChange(index)}
            >
                <View style={{
                    backgroundColor: '#BADA55',
                    width: screenW,
                    height: screenH,
                }}>
                    <ViewPagerAndroid
                        style={{width: this.state.width, height: this.state.height, backgroundColor: 'red'}}>

                        <View style={{flex: 1,backgroundColor:'green'}}>
                            <Text>111111</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text>111111</Text>
                        </View>
                    </ViewPagerAndroid>


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

            </ViewPagerAndroid>
        </View>
    }
}