/**
 * Created by Rookie on 2017/11/29.
 */
import React, {Component} from 'react';
import {View, Text, Animated} from 'react-native';
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';


let tabs = ['1', '2', '3', '4','5'];
export default class DefaultTabBarPage extends Component {


    constructor(props) {
        super(props);

    }


    render() {

        return <ScrollableTabView
            style={{marginTop: 20,}}
            initialPage={0}
            tabs={tabs}
            renderTabBar={() => <DefaultTabBar underlineStyle={{backgroundColor: '#ff9597', height: 2}}/>}
        >

            <View  style={{flex: 1, backgroundColor: 'white'}}/>
            <Text >favorite</Text>
            <Text >project</Text>
            <Text >project</Text>
            <Text >project</Text>
        </ScrollableTabView>;
    }
}


