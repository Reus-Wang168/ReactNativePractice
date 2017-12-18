import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Dimensions,
    View,
    Image, Text,
} from 'react-native';

import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
let pics = require('../../resource/pics.json');
import Swiper from 'react-native-swiper';

// Using tabBarPosition='overlayTop' or 'overlayBottom' lets the content show through a
// semitransparent tab bar. Note that if you build a custom tab bar component, its outer container
// must consume a 'style' prop (e.g. <View style={this.props.style}) to support this feature.
export default () => {
    return <ScrollableTabView
        style={styles.container}
        renderTabBar={() => <DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)'/>}
        initialPage={1}
        tabBarPosition='overlayTop'
    >
        <ScrollView tabLabel='iOS'>

            <View style={{flex: 1}}>


                <Swiper
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
                    }} source={require('../../resource/Hydrangeas.jpg')}/>
                    <Image style={{
                        width: screenW,
                        height: screenH / 3,
                    }} source={{uri: pics[1]}}/>
                    <Image style={{
                        width: screenW,
                        height: screenH / 3,
                    }} source={{uri: pics[29]}}/>

                </Swiper>
            </View>
        </ScrollView>
        <ScrollView tabLabel='Android'>
            <View style={{flex: 1}}>
                <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[0]}}/>
                <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[10]}}/>
                <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[11]}}/>
                <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[20]}}/>
                <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[30]}}/>
                <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[40]}}/>
                <Image style={{width: screenW, height: screenH / 3,}} source={{uri: pics[50]}}/>
            </View>

        </ScrollView>
        <ScrollView tabLabel='Web'>
            <Icon name='logo-android' color='#A4C639' size={300} style={styles.icon}/>
            <Icon name='logo-apple' color='black' size={300} style={styles.icon}/>
            <Icon name='logo-angular' color='brown' size={300} style={styles.icon}/>
            <Icon name='logo-python' color='#A4C639' size={300} style={styles.icon}/>
            <Icon name='logo-google' color='black' size={300} style={styles.icon}/>
            <Icon name='logo-html5' color='brown' size={300} style={styles.icon}/>
        </ScrollView>
    </ScrollableTabView>;
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
    },
    icon: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
    contentContainer: {
        width: 2 * screenW,
        height: 200,
    },
});
