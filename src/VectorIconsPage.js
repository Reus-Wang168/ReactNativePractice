/**
 * Created by Rookie on 2017/11/16.
 */

import React, {Component} from 'react';
import {View, Text, Dimensions, Image, Alert} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;


import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

let data = require('./localdata/Tulips.jpg');


export default class VectorIconsPage extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title
    });

    constructor(props) {
        super(props);

        console.log("props==" + props);


        this.state = {
            gearIcon: data
        };
    }

    _onBackPressed = () => {
        console.log("come here");
        this.props.navigation.goBack()
    };

    componentWillMount() {
        // https://github.com/facebook/react-native/issues/1403 prevents this to work for initial load
        Icon.getImageSource('ios-settings', 100).then((source) => this.setState({gearIcon: source}));
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Icon.ToolbarAndroid
                    style={{width: width, height: 56}}
                    title="Home"
                    titleColor="black"
                    navIconName="md-arrow-back"
                    onIconClicked={this._onBackPressed}
                    actions={[
                        {title: 'Settings', iconName: 'md-settings', iconSize: 30, show: 'always'},
                        {title: 'Follow me on Twitter', iconName: 'logo-twitter', iconColor: "#4099FF", show: 'always'},
                        {title: 'More', iconName: 'md-more', iconColor: "#4099FF", show: 'ifRoom'},
                        {title: 'menu1', iconName: 'md-open', iconColor: "#4099FF", show: 'ifRoom'},
                        {title: 'menu1', iconName: 'md-log-in', iconColor: "#4099FF", show: 'ifRoom'},
                        {title: 'menu1', iconName: 'md-log-out', iconColor: "#4099FF", show: 'ifRoom'},


                    ]}
                    overflowIconName="md-more"
                />
                <Text style={{margin: 10}}>Basic</Text>
                <View style={{flexDirection: 'row'}}>

                    <Icon style={{margin: 20}} name="md-woman" size={30} color="#000000"/>
                    <Icon style={{margin: 20}} name="md-videocam" size={30} color="#FF6A6A"/>
                    <Icon style={{margin: 20}} name="md-subway" size={30} color="#000000"/>
                    <Icon style={{margin: 20}} name="md-wifi" size={30} color="#000000"/>
                    <Icon style={{margin: 20}} name="md-share" size={30} color="#FF6A6A"/>

                </View>

                <Text style={{margin: 10}}>InLine</Text>

                <Text style={{margin: 10, fontSize: 18, padding: 8}}>
                    Lorem <Icon name="ios-book" color="#4F8EF7" size={25}/>Ipsum
                </Text>

                <Text style={{margin: 10}}>Button</Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 10,
                }}>

                    <FontAwesome.Button
                        name={'facebook'} onPress={() =>
                        Alert.alert("Message", "Login with facebook-awesome-button")
                    }>
                        Login with facebook-awesome-button

                    </FontAwesome.Button>

                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 10,
                }}>

                    <Icon.Button name={'md-play'} backgroundColor={'#ff728b'}>
                        ionic-button
                    </Icon.Button>
                </View>


                <Text style={{margin: 10}}>Image</Text>

                <Image style={{width: 100, height: 100, margin: 10}} source={this.state.gearIcon}/>


            </View>)
    }
}