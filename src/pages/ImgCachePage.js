/**
 * Created by Rookie on 2017/11/17.
 */

import React, {Component} from 'react';

import {View, Text, Image, FlatList} from 'react-native';

import {CachedImage, ImageCacheProvider} from 'react-native-cached-image';

const datas = ["http://d.hiphotos.baidu.com/image/pic/item/3b292df5e0fe9925279aa8433ea85edf8db1710b.jpg",
    "http://d.hiphotos.baidu.com/image/pic/item/3b292df5e0fe9925279aa8433ea85edf8db1710b.jpg"];

const data = ['1', '2', '3'];

export default class ImgCachePage extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title
    });
    _keyExtractor = (item) => item;

    render() {
        return (<View style={{flex: 1}}>
            <Text style={{margin: 10, fontSize: 18, color: 'black'}}>ImageCache</Text>

            <View style={{flexDirection: 'row'}}>
                <CachedImage
                    source={{uri: 'http://d.hiphotos.baidu.com/image/pic/item/3b292df5e0fe9925279aa8433ea85edf8db1710b.jpg'}}
                    style={{width: 160, height: 160, margin: 10}}
                />

                <Image
                    source={{uri: 'http://d.hiphotos.baidu.com/image/pic/item/3b292df5e0fe9925279aa8433ea85edf8db1710b.jpg'}}
                    style={{width: 160, height: 160, margin: 20}}/>
            </View>

            <Text style={{margin: 10, fontSize: 18, color: 'black'}}>load gif</Text>


            <View style={{flexDirection: 'row'}}>
                <Image
                    source={{uri: 'http://img.zcool.cn/community/018003591d063cb5b3086ed4627878.gif'}}
                    style={{width: 160, height: 160, margin: 20}}
                />

                <Image
                    source={{uri: 'http://img.mp.sohu.com/upload/20170704/1f673cd21b09401a9d6314cc2356a5ad_th.png'}}
                    style={{width: 160, height: 160, margin: 20}}/>
            </View>

            <FlatList
                data={data}
                keyExtractor={this._keyExtractor}
                renderItem={
                    ({item}) =>
                        <Text style={{margin: 10, fontSize: 22, color: 'black'}}>{item}</Text>
                }
            />


        </View>)
    }
}