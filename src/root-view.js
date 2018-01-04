/**
 * Created by Rookie on 2017/12/15.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppConfig,
    AppRegistry,
    Easing,
    Animated, StatusBar, View
} from 'react-native';

import {StackNavigator} from 'react-navigation'


import ExampleIndex from './pages/IndexPage';
import PullList from './pages/PullListPage';
import Camera from './component/BadInstagramCloneApp';
import Animations from './pages/AnimationsPage';
import MyViewPager from './pages/MyViewPager';
import ProductDetail from './pages/ProductDetailPage';
import VectorIcons from './pages/VectorIconsPage';


import SimpleExample from './pages/tabscrollview/SimpleExample';
import DynamicExample from './pages/tabscrollview/DynamicExample';
import FaceBookExample from './pages/tabscrollview/FacebookExample';
import ScrollableTabsExample from './pages/tabscrollview/ScrollableTabsExample';
import OverlayExample from './pages/tabscrollview/OverlayExample';
import DefaultTabBarPage from './pages/tabscrollview/DefaultTabBarPage';
import IndexExample from './pages/tabscrollview/IndexExample';
import SwiperExample from './pages/SwiperExample';
import FlatListExample from './pages/FlatListExamplePage';
import ImgCachePage from './pages/ImgCachePage';
import IconLoader from './pages/IconLoaderPage';
import ModalPage from './pages/ModalPage';
import StyledComponentsPage from './pages/StyledcomponentsPage';
import LifeCyclePage from './pages/LifeCyclePage';
import ToastPage from './pages/ToastExamplePage';
import ScrollViewPage from './pages/ScrollViewPage';
import './resource/Images';
import KeyBoardUsePage from './pages/KeyBoardUsePage';

import {ThemeProvider} from 'styled-components/native';


import theme from './theme/theme';


const AppNav = StackNavigator({
    Home: {screen: ExampleIndex},
    AppList: {screen: PullList},
    Camera: {screen: Camera},
    Animation: {screen: Animations},
    MyViewPager: {screen: MyViewPager},
    ProductDetail: {screen: ProductDetail},
    SimpleExample: {screen: SimpleExample},
    DynamicExample: {screen: DynamicExample},
    FaceBookExample: {screen: FaceBookExample},
    DefaultTabBarPage: {screen: DefaultTabBarPage},
    ScrollableTabsExample: {screen: ScrollableTabsExample},
    OverlayExample: {screen: OverlayExample},
    IndexExample: {screen: IndexExample},
    SwiperExample: {screen: SwiperExample},
    FlatListExample: {screen: FlatListExample},
    VectorIconsPage: {screen: VectorIcons},
    ImgCachePage: {screen: ImgCachePage},
    IconLoaderPage: {screen: IconLoader},
    ModalPage: {screen: ModalPage},
    StyledComponentsPage: {screen: StyledComponentsPage},
    LifeCyclePage: {screen: LifeCyclePage},
    ToastPage: {screen: ToastPage},
    ScrollViewPage: {screen: ScrollViewPage},
    KeyBoardUsePage:{screen:KeyBoardUsePage}

}, {
    initialRouteName: 'Home',
    headerMode: 'screen',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#3e77ff'
        },
        headerTitleStyle: {
            color: 'white'
        },
        gesturesEnabled: true,
        headerTintColor: 'white',
        headerBackTitleStyle: {
            color: 'white'
        }
    },
    transitionConfig: () => ({
        transitionSpec: {
            duration: 500,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const {index} = scene;


            const width = layout.initWidth;
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [width, 0, 0],
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });

            return {opacity, transform: [{translateX}]};
        },
    }),
});


export default class  extends Component {
    render() {
        return (<ThemeProvider theme={theme}>
                <View style={{flex: 1}}>
                    <StatusBar
                        backgroundColor={"#3e77ff"}
                        barStyle="light-content"
                    />
                    <AppNav/>
                </View>

            </ThemeProvider>
        )
    }
}





