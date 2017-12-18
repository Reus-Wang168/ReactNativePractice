/**
 * Created by mac on 2017/11/9.
 */
import React, {Component} from 'react';
import {
    View,
    ViewPagerAndroid,
    Platform,
    Dimensions,
    ScrollView
} from 'react-native'

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

import ScrollableTabView from  'react-native-scrollable-tab-view';
import PropType from 'prop-types';

export default class HorizontalScrollView extends Component {

    static propTypes = {
        scrollEnabled: PropType.bool,
        initialPage: PropType.number,
        onPageSelected: PropType.func,
    }

    static defaultProps = {
        initialPage: 0,
        scrollEnabled: true,
    }

    _setPage = (index) => {

        if (Platform.OS == 'ios') {
            this.refs.s.goToPage(index);
        }
        else {
            this.refs.v.setPage(index);
        }

    }

    _getPage = (index) => {

        this.props.onPageSelected && this.props.onPageSelected(index);
    }

    render() {
        const {scrollEnabled, initialPage, children} = this.props;
        console.log('scrollEnabled =' + scrollEnabled);
        return (
            <View style={{width: width, height: height}}>
                {
                    Platform.OS == 'ios' ?
                        <ScrollableTabView
                            ref="s"
                            renderTabBar={false}
                            locked={!scrollEnabled}
                            initialPage={initialPage}
                            onChangeTab={(e) => {
                                this._getPage(e.i);
                            }}
                            children={children}
                        /> :
                        <ViewPagerAndroid
                            ref="v"
                            scrollEnabled={scrollEnabled}
                            initialPage={initialPage}
                            onPageSelected={(e) => {
                                this._getPage(e.nativeEvent.position);
                            }}
                        >
                            {children}
                        </ViewPagerAndroid>
                }
            </View>
        )
    }

}