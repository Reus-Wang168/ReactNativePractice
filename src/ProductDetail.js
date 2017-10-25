import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
    ToastAndroid,
    VirtualizedList,
} from 'react-native';


import {PullView} from 'react-native-pull'

import Swiper from 'react-native-swiper';
import Screen from './common/Screen';
import common from './common/common';

import CustomScrollView from './CustomScrollView';

let data = require('./localdata/product.json');
let dataMatch = require('./localdata/prodMatch.json');


export default class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            data: data,
            bottomProps: false,
            dataMatch: dataMatch,
            properties: [],
        });
    }


    componentDidMount() {
        let properties = [];
        for (var key in this.state.data.data.styles[0].properties) {

            let value = this.state.data.data.styles[0].properties[key]
            console.log("key=" + key + ", value=" + value);

            let obj = {};
            obj.key = key;
            obj.value = value;


            properties.push(obj);


        }

        this.setState({
            properties: properties,
        });


    }

    _buyNow = () => {
        ToastAndroid.show("buyNow", ToastAndroid.SHORT);
    };

    _addShopCar = () => {
        ToastAndroid.show("addShopCar", ToastAndroid.SHORT);
    };

    _goProduct = () => {
        ToastAndroid.show("goProduct", ToastAndroid.SHORT);
    };

    _keyExtractor = (item, index) => item.id;

    _renderMatchItem = ({item}) => (
        <TouchableOpacity onPress={this._goProduct}>
            <View style={{marginLeft: 5, marginRight: 5}}>
                <Image style={{width: 90, height: 90}} source={{uri: item.thumbUrl}}/>
                <Text numberOfLines={2} style={{width: 90}}>{item.productName}</Text>
                <Text style={{color: 'red', fontSize: 12}}>¥{item.matchPrice}</Text>
            </View>
        </TouchableOpacity>
    );


    render() {

        let bannerImgs = [];

        data.data.pics.map(function (item, i) {

            let v = (
                <View key={i} style={{flex: 1}}>
                    <Image style={{width: Screen.width, height: Screen.height / 2}} key={i}
                           resizeMode={'contain'}
                           source={{uri: item}}/>
                </View>
            );

            bannerImgs.push(v)
        });


        return (


                <CustomScrollView>
                    <ScrollView contentContainerStyle={{width: Screen.width}}>
                        <Swiper
                            loop={true}
                            index={0}
                            autoplay={false}
                            autoplayTimeout={2}
                            horizontal={true}
                            pagingEnabled
                            showsPagination={true}
                            height={Screen.height / 2}
                            contentContainerStyle={[styles.contentContainer, {flexDirection: 'row'}]}
                            dotColor="white"
                            activeDotColor="blue"
                            paginationStyle={{width: 50, height: 20, left: Screen.width / 2 - 50 / 2, bottom: -5}}
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
                            {bannerImgs}

                        </Swiper>


                        <Text style={styles.title}>
                            {this.state.data.data.name}
                        </Text>
                        <Text style={styles.title_1}>
                            {this.state.data.data.description}
                        </Text>
                        {/*价格*/}
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

                            <View style={{flexDirection: 'row', margin: 10, alignItems: 'flex-end'}}>
                                <Text style={{color: 'red', fontSize: 19, fontWeight: 'normal'}}>
                                    ¥4.00
                                </Text>
                                <Text>
                                    ¥4.00
                                </Text>
                            </View>
                            <Text style={{margin: 10}}>总销量 0</Text>
                        </View>


                        {/*商品属性*/}
                        {this.state.properties.map(function (item, i) {
                            return (<View key={i} style={{flex: 1, width: Screen.width}}>
                                <View style={{backgroundColor: 'black', height: 0.21, marginLeft: 10}}/>
                                <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
                                    <Text style={{fontSize: 18}}>{item.key}</Text>
                                    <Text style={{marginLeft: 10}}>{item.value}</Text>
                                </View>

                            </View>)
                        })}
                        {/*商品加减*/}
                        <View style={{backgroundColor: 'black', height: 0.21, marginLeft: 10}}/>
                        <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
                            <Text style={{fontSize: 18, marginRight: 10}}>数量</Text>
                            <View style={{borderWidth: 0.2, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontSize: 19, marginLeft: 10, marginRight: 10}}>-</Text>
                            </View>
                            <View style={{borderWidth: 0.2, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontSize: 19, marginLeft: 12, marginRight: 12}}>0</Text>
                            </View>
                            <View style={{borderWidth: 0.2, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontSize: 19, marginLeft: 10, marginRight: 10}}>+</Text>
                            </View>
                        </View>

                        <View style={{backgroundColor: 'snow', height: 10}}/>
                        <Text style={{fontSize: 18, margin: 10}}>商品推荐</Text>

                        <View style={{height: 140}}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                data={this.state.dataMatch.data}
                                keyExtractor={this._keyExtractor}
                                renderItem={this._renderMatchItem}
                            />
                        </View>


                        <View style={{
                            marginTop: 20,
                            marginBottom: 20,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text>到底了</Text>
                        </View>
                    </ScrollView>

                    <ScrollView
                        contentContainerStyle={{alignItems: 'center', backgroundColor: '#31cd96'}}>
                        <Text style={{margin: 10, color: 'white', fontSize: 18}}>图文详情</Text>
                        <Text style={{margin: 10, color: 'white', fontSize: 18}}>图文详情</Text>
                        <Text style={{margin: 10, color: 'white', fontSize: 18}}>图文详情</Text>
                        <Text style={{margin: 10, color: 'white', fontSize: 18}}>图文详情</Text>
                        <Text style={{margin: 10, color: 'white', fontSize: 18}}>图文详情</Text>
                        <Text style={{margin: 10, color: 'white', fontSize: 18}}>图文详情</Text>
                        <Text style={{margin: 10, color: 'white', fontSize: 18}}>图文详情</Text>
                        <Text style={{margin: 10, color: 'white', fontSize: 18}}>图文详情</Text>
                    </ScrollView>

                </CustomScrollView>
                // <View style={{backgroundColor: 'white', height: 60, flexDirection: 'row'}}>
                //
                //     <View style={{
                //         flexDirection: 'row',
                //         flex: 1,
                //         backgroundColor: 'black',
                //         alignItems: 'center',
                //         justifyContent: 'center'
                //     }}>
                //         <Image style={{margin: 10}} source={require('../res/images/icon-favorite.png')}/>
                //         <Image style={{margin: 10}} source={require('../res/images/icon-cart-float-panel.png')}/>
                //     </View>
                //     <TouchableOpacity style={{flex: 1}} onPress={this._buyNow}>
                //         <View
                //             style={{flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
                //             <Text style={{color: common.textColor, fontSize: 18}}>立即购买</Text>
                //         </View>
                //     </TouchableOpacity>
                //     <TouchableOpacity style={{flex: 1}} onPress={this._addShopCar}>
                //         <View style={{
                //             flex: 1,
                //             backgroundColor: common.barColor,
                //             alignItems: 'center',
                //             justifyContent: 'center'
                //         }}>
                //             <Text style={{color: common.textColor, fontSize: 18}}>加入购物车</Text>
                //         </View>
                //     </TouchableOpacity>
                //
                //
                // </View>

        );
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
        width: 2 * Screen.width,
        height: 200,
    },
});
