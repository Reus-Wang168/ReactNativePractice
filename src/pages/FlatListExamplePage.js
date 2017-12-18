/**
 * Created by Rookie on 2017/11/1.
 */

import React, {Component} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';

import Icon from '../component/icon/icon';

const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

class Header extends Component {


    render() {


        let renderMyView = () => {
            let views = [];

            data.map((item, index) => {
                let view = <Text key={index}>Header {item}</Text>
                views.push(view)
            });

            return views;
        };


        return (<View style={{height: 200, backgroundColor: '#03A9F4'}}>
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                {renderMyView()}
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
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title
    });

    constructor(props) {
        super(props);

        this.state = ({
            refreshing: false,
        });

    }


    _keyExtractor = (item, index) => item;
    _renderItem = ({item}) => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{padding: 10, fontSize: 18, height: 44, margin: 10}}>{item}</Text>
            <Icon name={'ios-share'}/>
        </View>

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