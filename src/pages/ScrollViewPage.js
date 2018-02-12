import React, { Component } from "react";

import {
    View,
    Style,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from "react-native";
import screen from "../common/screen";
import Icon from "../component/icon/icon";

class Toolbar extends Component {
    render() {
        let showTitle = this.props.percent >= 0.8;

        return (
            <View
                style={{
                    height: 56,
                    width: screen.width,
                    position: "absolute",
                    top: 0,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: this.props.backgroundColor
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}
                >
                    <Icon
                        name={"ios-arrow-back"}
                        color={"green"}
                        style={{ margin: 10 }}
                    />
                </TouchableOpacity>

                {showTitle ? (
                    <Text style={{ color: "black", fontSize: 22 }}>Title</Text>
                ) : null}

                <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                    <Icon
                        name={"md-share"}
                        color={"green"}
                        style={{ margin: 10 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export default class ScrollViewPage extends Component {
    static navigationOptions = ({}) => ({
        header: null
    });

    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: "rgba(255,255,255,0)",
            percent: 0.0
        };
    }

    _onScroll = e => {
        let y = e.nativeEvent.contentOffset.y;

        if (y > 220) {
            return;
        }

        let percent = y / 200;

        if (percent < 0) {
            percent = 0;
        } else if (percent > 1) {
            percent = 1;
        }

        let color = `rgba(255,255,255,${percent})`;

        console.log("scroll==" + color);

        this.setState({
            backgroundColor: color,
            percent: percent
        });
    };

    render() {
        return (
            <View style={{ flex: 1, width: screen.width }}>
                <ScrollView
                    style={{ flex: 1 }}
                    onScroll={this._onScroll}
                    showsVerticalScrollIndicator={false}
                >
                    <Image
                        style={{ height: 200, width: screen.width }}
                        source={{
                            uri:
                                "http://img1.360buyimg.com/da/jfs/t12034/273/2285692494/107077/b9fc7d96/5a37189dNbdd69637.jpg"
                        }}
                    />
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                    <Text style={{ margin: 10, color: "black", fontSize: 22 }}>
                        ScrollView
                    </Text>
                </ScrollView>

                <Toolbar
                    backgroundColor={this.state.backgroundColor}
                    percent={this.state.percent}
                    navigation={this.props.navigation}
                />
            </View>
        );
    }
}
