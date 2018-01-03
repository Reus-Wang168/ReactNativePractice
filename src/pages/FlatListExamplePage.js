/**
 * Created by Rookie on 2017/11/1.
 */

import React, {Component} from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity, Dimensions} from 'react-native';

import Icon from '../component/icon/icon';

const width = Dimensions.get('window').width;

const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'];

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
                {/*{renderMyView()}*/}
                <Text style={{margin: 30, fontSize: 20, color: 'white'}}>Head</Text>

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
        title: navigation.state.params.title,
    });

    constructor(props) {
        super(props);

        this.state = ({
            refreshing: false,
            num: 1
        });

    }

    _onPress = () => {
        if (this.state.num === 1) {
            this.setState({
                num: 2
            })
        } else {
            this.setState({
                num: 1
            })
        }


    };


    _keyExtractor = (item, index) => item;
    _renderItem = ({item}) => (
        <TouchableOpacity onPress={this._onPress}>
            <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#4bd8d9', width: width/2}}>

                <Text style={{padding: 10, fontSize: 18, height: 44, margin: 10}}>{item}</Text>
                <Icon name={'ios-share'}/>


            </View>
        </TouchableOpacity>

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
                // columnWrapperStyle={this.state.num > 1 ? {
                //     flexDirection: 'row',
                //     alignItems: 'center',
                //     width: width / 2,
                //     backgroundColor: '#d9373e'
                // } : null}
                numColumns={this.state.num}
                onRefresh={this._onRefresh}
                refreshing={this.state.refreshing}
                data={data}
                key={this.state.num}
                keyExtractor={this._keyExtractor}
                renderItem={(item) => this._renderItem(item)}
                ListHeaderComponent={Header}
                onEndReachedThreshold={0.1}
                onEndReached={(info) => this._onEndReached(info)}
            />
        </View>);
    }
}