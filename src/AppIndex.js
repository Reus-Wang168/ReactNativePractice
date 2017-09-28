/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPagerAndroid,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from 'react-native';

let width = Dimensions.get('window').width;


import App from './app';
import AppList from './appList';

let times = [{time: '9:00'}, {time: '10:00'}, {time: '12:00'}, {time: '14:00'}, {time: '16:00'}, {time: '20:00'}];
let itemWidth = 80;

class TopScrollView extends Component {


    // 构造
    constructor(props) {
        super(props);


        // 初始状态
        this.state = {};
    }

    renderItems = () => {

        let itemViews = [];

        this.props.array.map((item, i) => {

            itemViews.push(
                <TouchableOpacity key={item.time} activeOpacity={1.0} onPress={() => {
                    this.props.scrollBottomItem(i);
                }}>
                    <View
                        style={{
                            height: 50,
                            width: 80,
                            backgroundColor: i === this.props.index ? 'red' : 'black',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text style={{color: 'white'}}>{item.time}</Text>
                    </View>
                </TouchableOpacity>)
        })

        return itemViews;
    }


    componentDidMount() {

        this.refs.s.scrollTo({x: -width / 2 + itemWidth / 2 + this.props.index * itemWidth})
    }

    componentDidUpdate() {
        this.refs.s.scrollTo({x: -width / 2 + itemWidth / 2 + this.props.index * itemWidth})
    }


    render() {
        return (
            <View style={{width: width, height: 50, backgroundColor: 'black', justifyContent: 'center'}}>
                <ScrollView
                    ref='s'
                    horizontal={true}
                    scrollEnabled={true}
                    contentContainerStyle={{flexDirection: 'row'}}
                >
                    {this.renderItems()}
                </ScrollView>
            </View>
        )
    }
}


export default class AppIndex extends Component {


    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            times: times,
            index: 0,
        };
    }


    scrollTopItem = (index) => {

        if (index === this.state.index) {
            return;
        }

        let itemArray = this.state.times;

        itemArray.map((item, i) => {
            item.select = i === index;
            return item;
        })
        this.setState({
            index: index,
            times: itemArray,
        })


    }

    scrollBottomItem = (index) => {

        if (index === this.state.index) {
            return;
        }

        console.log('onPress');
        let itemArray = this.state.times;

        itemArray.map((item, i) => {
            if (i === index) {
                item.select = true;
            }
            else {
                item.select = false;
            }
            return item;
        });
        this.setState({
            index: index,
            times: itemArray,
        })

        this.refs.ViewPager.setPage(index);

    }


    render() {
        return (
            <View style={styles.container1}>

                <StatusBar
                    hidden={false}
                    backgroundColor={'black'}
                />


                <TopScrollView scrollBottomItem={this.scrollBottomItem} array={this.state.times}
                               index={this.state.index}/>


                <ViewPagerAndroid style={styles.container1} ref='ViewPager'
                                  onPageSelected={(e) => {
                                      let position = e.nativeEvent.position;
                                      this.scrollTopItem(position)
                                  }}>
                    <View style={styles.container}>
                        <App bgColor={'yellow'} navigation={this.props.navigation}/>
                    </View>
                    <View style={styles.container}>
                        <AppList/>
                    </View>
                    <View style={styles.container}>
                        <App bgColor={'green'} navigation={this.props.navigation}/>
                    </View>
                    <View style={styles.container}>
                        <AppList/>
                    </View>
                    <View style={styles.container}>
                        <App bgColor={'green'} navigation={this.props.navigation}/>
                    </View>
                    <View style={styles.container}>
                        <AppList/>
                    </View>
                    <View style={styles.container}>
                        <App bgColor={'green'} navigation={this.props.navigation}/>
                    </View>
                </ViewPagerAndroid>
            </View>


        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    container1: {
        flex: 1,
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

