/**
 * Created by Rookie on 2017/11/17.
 */

import React, {Component} from 'react';

import {View, Text,Image} from 'react-native';

import {CachedImage, ImageCacheProvider} from 'react-native-cached-image';


export default class ImgCachePage extends Component {
    render() {
        return (<View style={{flex: 1}}>
            <Text style={{margin: 10, fontSize: 18, color: 'black'}}>ImageCache</Text>
			
			<View style={{flexDirection:'row'}}>
					<CachedImage
			source={{uri:'http://d.hiphotos.baidu.com/image/pic/item/3b292df5e0fe9925279aa8433ea85edf8db1710b.jpg'}}
			style={{width: 160, height: 160,margin:10}}
			/>
			
			<Image source={{uri: 'http://d.hiphotos.baidu.com/image/pic/item/3b292df5e0fe9925279aa8433ea85edf8db1710b.jpg'}}
				style={{width: 160, height: 160,margin:20}} />
			</View>
			
	

        </View>)
    }
}