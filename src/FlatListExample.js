/**
 * Created by Rookie on 2017/11/1.
 */

import React, {Component} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';

const data = [
    {key: 'Devin'},
    {key: 'Jackson'},
    {key: 'James'},
];

class Header extends Component {
    render() {
        return (<View style={{flex: 1}}>
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
            </ScrollView>

        </View>)
    }
}

class Footer extends Component {
    render() {
        return (<View>
            <Text style={{padding: 10, fontSize: 18, height: 44,}}>foot</Text>
        </View>)
    }
}

export default class FlatListExample extends Component {

    constructor(props) {
        super(props);

        this.state=({
            refreshing:false,
        });

    }


    _keyExtractor = (item, index) => item;
    _renderItem = ({item}) => (<Text style={{padding: 10, fontSize: 18, height: 44,}}>{item.key}</Text>);
    _onEndReached=({info})=>{
        console.log("onEndReach===" + info);
    };

    _onRefresh=()=>{


        this.setState({
            refreshing:true,
        });


        setTimeout(() => {
            this.setState ({refreshing: false})
        }, 2000);
    };

    render() {
        return (<View style={{flex: 1}}>
            <FlatList
                onRefresh={this._onRefresh}
                refreshing={this.state.refreshing}
                data={data}
                keyExtractor={this._keyExtractor()}
                renderItem={(item) => this._renderItem(item)}
                ListHeaderComponent={Header}
                onEndReachedThreshold={100}
                onEndReached={(info)=>this._onEndReached(info)}
            />
        </View>);
    }
}