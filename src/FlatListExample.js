/**
 * Created by Rookie on 2017/11/1.
 */

import React, {Component} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';

const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];

class Header extends Component {
    render() {
        return (<View style={{flex: 1}}>
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
                <Text style={{padding: 10, fontSize: 18, height: 44,}}>head</Text>
            </ScrollView>

        </View>)
    }
}

class Footer extends Component {
    render() {
        return (<View style={{alignItems: 'center'}}>
            <Text style={{padding: 10, fontSize: 18, height: 44,}}>foot</Text>
        </View>)
    }
}

export default class FlatListExample extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            refreshing: false,
        });

    }


    _keyExtractor = (item, index) => item;
    _renderItem = ({item}) => (
        <Text style={{padding: 10, fontSize: 18, height: 44,}}>{item}</Text>
    );
    _onEndReached = ({info}) => {
        console.log("onEndReach===" + info);
    };

    _onRefresh = () => {


        this.setState({
            refreshing: true,
        });


        setTimeout(() => {
            this.setState({refreshing: false})
        }, 2000);
    };

    render() {
        return (<View style={{flex: 1}}>
            <FlatList
                onRefresh={this._onRefresh}
                refreshing={this.state.refreshing}
                data={data}
                keyExtractor={this._keyExtractor}
                renderItem={(item) => this._renderItem(item)}
                ListHeaderComponent={Header}
                onEndReachedThreshold={0.1}
                onEndReached={(info) => this._onEndReached(info)}
            />
        </View>);
    }
}