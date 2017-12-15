import React, {Component} from 'react';
import {
    Text, View, ViewPagerAndroid, Dimensions, Image, StyleSheet, TouchableOpacity, ScrollView, Switch, TextInput,
    RefreshControl
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
let pics = require('./../pics.json');


import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import Swiper from 'react-native-swiper';
import CustomTabBar from './custom-tab-bar/CustomTabBar';

export default class SimpleExample extends Component {


    static navigationOptions = ({navigation}) => ({
        title: navigation.state.routeName,
    });

    static transitionConfig = () => ({
        transitionSpec: {
            duration: 500,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const {index} = scene;

            console.log("the scene index=" + index);

            const width = layout.initWidth;
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [width, 0, 0],
            });

            const scaleX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [1, 1, 0.5],
            });
            const scaleY = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [1, 1, 0.5],
            });
            const rotateY = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: ["0deg", "0deg", "45deg"],

            });


            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });

            return {opacity, transform: [{translateX}, {scaleX}, {scaleY}]};
        },
    });


    constructor(props) {
        super(props);

        this.state = {
            showSwiper: false,
            scrollable: false,
            isRefreshing: false,
            animated: false,
        }
    }


    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                showSwiper: true,
            })
        }, 1)
    }


    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    _onValueChanged = (value) => {
        console.log("the value = " + value);
        this.setState({
            scrollable: value,
        })
    };
    _onValueChanged_1 = (value) => {
        console.log("the value = " + value);
        this.setState({
            animated: value,
        })
    };

    _onRefresh = () => {

        this.setState({
            isRefreshing: true
        });

        setTimeout(() => {

            this.setState({
                isRefreshing: false,
            });
        }, 5000)
    };

    _onLayout = (event) => {
        console.log("now the event x=" + event.nativeEvent.layout.x);
        console.log("now the event y=" + event.nativeEvent.layout.y);
        console.log("now the event width=" + event.nativeEvent.layout.width);
        console.log("now the event height=" + event.nativeEvent.layout.height);
    };

    render() {

        return (<View style={{height: screenH}}>

            <ScrollView contentContainerStyle={{height: screenH}}>




                <ScrollableTabView
                    locked={this.state.scrollable}
                    style={{marginTop: 0,}}
                    initialPage={0}
                    renderTabBar={() => <DefaultTabBar
                        underlineStyle={{backgroundColor: '#de5c63', height: 4}}
                        backgroundColor={'white'}
                        activeTextColor={'#de5c63'}
                        tabStyle={{backgroundColor: 'white'}}
                        textStyle={{fontWeight: 'normal'}}
                    />}
                    tabBarPosition={'top'}
                    scrollWithoutAnimation={this.state.animated}
                >

                    <View tabLabel='销量' style={{flex: 1, backgroundColor: 'white'}} onLayout={this._onLayout}>
                        <ScrollView
                            style={{width: screenW, height: screenH}}
                            refreshControl={
                                <RefreshControl
                                    size={1}
                                    refreshing={this.state.isRefreshing}
                                    onRefresh={this._onRefresh}
                                    tintColor="#ff0000"
                                    title="Loading..."
                                    titleColor="#00ff00"
                                    colors={['#ff0000', '#00ff00', '#0000ff']}
                                    progressBackgroundColor={'#fcfaff'}
                                />
                            }
                        >
                            {this.state.showSwiper ? (<Swiper
                                loop={false}
                                index={0}
                                autoplay={false}
                                autoplayTimeout={2}
                                horizontal={true}
                                pagingEnabled
                                showsPagination={true}
                                height={screenH / 3}
                                contentContainerStyle={[styles.contentContainer, {flexDirection: 'row'}]}
                                dotColor="black"
                                activeDotColor="red"
                                paginationStyle={{width: 50, height: 20, left: screenW / 2 - 50 / 2, bottom: -5}}
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
                                <Image style={{
                                    width: screenW,
                                    height: screenH / 3,
                                }} source={require('./../localdata/Hydrangeas.jpg')}/>
                                <Image style={{
                                    width: screenW,
                                    height: screenH / 3,
                                }} source={{uri: pics[25]}}/>
                                <Image style={{
                                    width: screenW,
                                    height: screenH / 3,
                                }} source={{uri: pics[29]}}/>

                            </Swiper>) : (
                                <View style={{width: screenW, height: screenH / 3, backgroundColor: 'white'}}/>)}


                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text>允许滑动？</Text>
                                <Switch style={{margin: 10}} value={this.state.scrollable}
                                        onTintColor={'#3e77ff'}
                                        thumbTintColor={'#3e77ff'}
                                        onValueChange={(value) => this._onValueChanged(value)}/>

                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text>滑动动画？</Text>
                                <Switch style={{margin: 10}} value={this.state.animated}
                                        onTintColor={'#3e77ff'}
                                        thumbTintColor={'#3e77ff'}
                                        onValueChange={(value) => this._onValueChanged_1(value)}/>

                            </View>

                            <View
                                style={{width: screenW, height: 100, backgroundColor: '#afff40', flexDirection: 'row'}}>
                                <View style={{flex: 1, backgroundColor: '#6ffffa'}}/>
                                <View style={{flex: 2, backgroundColor: '#eec2ff'}}/>
                                <View style={{flex: 3, backgroundColor: '#ff3e1b'}}/>
                            </View>

                            <View style={{width: 411.42, backgroundColor: '#00ffe8', marginTop: 20, height: 100}}/>


                        </ScrollView>
                    </View>
                    <Text tabLabel='上架时间'>project</Text>

                    <ScrollView tabLabel='价格'>
                        <View style={{flex: 1}}>
                            <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[11]}}/>
                            <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[20]}}/>
                            <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[30]}}/>
                            <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[40]}}/>
                            <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[50]}}/>
                            <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[0]}}/>
                            <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[10]}}/>

                        </View>
                    </ScrollView>
                    <ScrollView
                        onLayout={this._onLayout}
                        refreshControl={
                            <RefreshControl
                                size={0}
                                refreshing={this.state.isRefreshing}
                                onRefresh={this._onRefresh}
                                progressViewOffset={20}
                                colors={['#6c85ff', '#cd3023', '#cd3023', '#cebb2e']}
                                progressBackgroundColor={'white'}
                            />
                        }
                        tabLabel='筛选' showsVerticalScrollIndicator={false}
                        contentContainerStyle={{alignItems: 'center'}}>
                        <Icon name='logo-android' color='#A4C639' size={300} style={styles.icon}/>
                        <Icon name='logo-apple' color='black' size={300} style={styles.icon}/>
                        <Icon name='logo-angular' color='brown' size={300} style={styles.icon}/>
                        <Icon name='logo-python' color='#A4C639' size={300} style={styles.icon}/>
                        <Icon name='logo-google' color='#31cd96' size={300} style={styles.icon}/>
                        <Icon name='logo-html5' color='brown' size={300} style={styles.icon}/>
                    </ScrollView>
                </ScrollableTabView>
            </ScrollView>
        </View>);
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
        width: 2 * screenW,
        height: 200,
    },
});