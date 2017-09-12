/**
 * Created by Rookie on 2017/9/1.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Dimensions,
    ScrollView,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const {width, height} = Dimensions.get('window');

export default class CarouselExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            size: {width, height},
        };
    }

    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({size: {width: layout.width, height: layout.height}});
    };

    render() {
        return (
            <ScrollView>
                <View style={{flex: 1}} onLayout={this._onLayoutDidChange}>
                    <Carousel
                        delay={2000}
                        style={this.state.size}
                        autoplay={false}
                        pageInfo
                        onAnimateNextPage={(p) => console.log(p)}
                    >
                        <View style={[{backgroundColor: '#BADA55'}, this.state.size]}><Text>1</Text></View>
                        <View style={[{backgroundColor: '#ccc123'}, this.state.size]}><Text>2</Text></View>
                        <View style={[{backgroundColor: '#1ee111'}, this.state.size]}><Text>3</Text></View>
                    </Carousel>
                </View>
                <View style={{flex: 1}} onLayout={this._onLayoutDidChange}>
                    <Carousel
                        delay={3000}
                        style={this.state.size}
                        autoplay
                        pageInfo
                        onAnimateNextPage={(p) => console.log(p)}
                    >
                        <View style={[{backgroundColor: '#a5e6cd'}, this.state.size]}><Text>3</Text></View>
                        <View style={[{backgroundColor: '#454545'}, this.state.size]}><Text>1</Text></View>
                        <View style={[{backgroundColor: '#ffffff'}, this.state.size]}><Text>2</Text></View>
                    </Carousel>
                </View>
                <View style={{flex: 1}} onLayout={this._onLayoutDidChange}>
                    <Carousel
                        delay={4000}
                        style={this.state.size}
                        autoplay
                        pageInfo
                        onAnimateNextPage={(p) => console.log(p)}
                    >
                        <View style={[{backgroundColor: '#abcdef'}, this.state.size]}><Text>3</Text></View>
                        <View style={[{backgroundColor: '#898899'}, this.state.size]}><Text>1</Text></View>
                        <View style={[{backgroundColor: '#ccc111'}, this.state.size]}><Text>2</Text></View>
                    </Carousel>
                </View>
            </ScrollView>

        );
    }
}