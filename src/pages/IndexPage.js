/**
 * Created by Rookie on 2017/8/16.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Dimensions,
    PixelRatio,
    ToastAndroid,
    ScrollView, Button, Image,
    DeviceInfo,
    NativeModules,
} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
let pixelRatio = PixelRatio.get();


const pt2px = (pt) => PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = (px) => PixelRatio.roundToNearestPixel(px);


import {PullView} from 'react-native-pull';

import ImagePicker from 'react-native-image-crop-picker';
import Api from './../http/Api';

export default class app extends Component {

    static navigationOptions = {
        title: 'React Native Samples',
        headerTitleStyle: {alignSelf: 'center'}
    };

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            photoUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503569324452&di=291c5ac3f92d1438c2c86d791e9ab56f&imgtype=0&src=http%3A%2F%2Fpic41.nipic.com%2F20140601%2F18681759_143805185000_2.jpg'
        };

        this.onPullRelease = this.onPullRelease.bind(this);
        this.topIndicatorRender = this.topIndicatorRender.bind(this);


    }


    onPullRelease(resolve) {
        //do something
        setTimeout(() => {
            resolve();
        }, 3000);
    }

    topIndicatorRender(pulling, pullok, pullrelease) {
        const hide = {position: 'absolute', left: 10000, margin: 20, color: 'black', fontSize: 18};
        const show = {position: 'relative', left: 0, margin: 20, color: 'black', fontSize: 18};
        setTimeout(() => {
            if (pulling) {
                this.txtPulling && this.txtPulling.setNativeProps({style: show});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullok) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: show});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullrelease) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
            }
        }, 1);
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 70}}>
                <ActivityIndicator size="large" color={"#3e77ff"} style={{marginRight: 20}}/>
                <Text ref={(c) => {
                    this.txtPulling = c;
                }}>下拉刷新pulling...</Text>
                <Text ref={(c) => {
                    this.txtPullok = c;
                }}>松开刷新pullok......</Text>
                <Text ref={(c) => {
                    this.txtPullrelease = c;
                }}>玩命刷新中pullrelease......</Text>
            </View>
        );
    }

    _showDeviceInfo = () => {
        let names = "windowPhysicalPixels:\n";
        for (let name in DeviceInfo.Dimensions.windowPhysicalPixels) {
            names += name + ": " + DeviceInfo.Dimensions.windowPhysicalPixels[name] + "\n";
        }
        names += "\nscreenPhysicalPixels:\n";
        for (let name in DeviceInfo.Dimensions.screenPhysicalPixels) {
            names += name + ": " + DeviceInfo.Dimensions.screenPhysicalPixels[name] + "\n";
        }


        alert(names);
    };
    _selectPhoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            enableRotationGesture: true,
        }).then(image => {
            console.log(image);
            this.setState({
                photoUrl: image.path,
            })
        }).catch(err => {
            console.log(err);
        });
    };
    _select_multi_Photo = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            multiple: true,
            cropping: true
        }).then(image => {
            console.log(image);
            this.setState({
                photoUrl: image[0].path,
            })
        }).catch(err => {
            console.log(err);
        });
    };

    _openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            this.setState({
                photoUrl: image.path,
            })
        }).catch(err => {
            console.log(err);
        });
    };

    _Scan = () => {

    };

    _Custom_Module = () => {
        NativeModules.CustomToastModule.showShort("11111");
    };
    _Custom_Module_1 = () => {
        NativeModules.CustomToastModule.showLong("22222");
    };

    _Custom_Param = () => {

        NativeModules.CustomParamsMoudle.choose({
            name: '1234',
        }).then(result => {
            ToastAndroid.show("Param from Activity is " + result, ToastAndroid.SHORT);
            console.log("---------" + result)
        }).catch(err => {
            console.log(err)
        })
    };

    _toCameraPage = () => {
        this.props.navigation.navigate('Camera');
    };

    _goToPage = (params) => {
        this.props.navigation.navigate(params, {title: params});
    };

    _apiTest = () => {
        Api.Get("http://gank.io/api/data/Android/10/1", null, this._success, this._error)
    };

    _success = (resData) => {
        console.log("success: " + JSON.stringify(resData));
        ToastAndroid.show("success = " + !resData.error, ToastAndroid.SHORT);
    };

    _error = (error) => {
        ToastAndroid.show(error, ToastAndroid.SHORT);
        console.log("error: " + error)
    };


    render() {
        return (
            <View style={[styles.container]} ref='myview'>
                <PullView
                    showsVerticalScrollIndicator={false}
                    style={{width: Dimensions.get('window').width}}
                    onPullRelease={this.onPullRelease}
                    topIndicatorRender={this.topIndicatorRender}
                    topIndicatorHeight={70}>
                    <View style={{backgroundColor: 'white'}}>


                        <Image
                            style={{width: Dimensions.get('window').width, height: 200}}
                            source={{
                                uri: this.state.photoUrl
                            }}/>


                        <View style={{flex: 1, marginTop: 10, width: Dimensions.get('window').width}}>


                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='ApiTest'
                                    onPress={this._apiTest}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='LifeCyclePage'
                                    onPress={() => {
                                        this._goToPage('LifeCyclePage')
                                    }}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='ScrollViewPage'
                                    onPress={() => {
                                        this._goToPage('ScrollViewPage')
                                    }}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='StyledComponentsPage'
                                    onPress={() => {
                                        this._goToPage('StyledComponentsPage')
                                    }}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='ModalPage'
                                    onPress={() => {
                                        this._goToPage('ModalPage')
                                    }}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='ToastPage'
                                    onPress={() => {
                                        this._goToPage('ToastPage')
                                    }}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='IconLoaderPage'
                                    onPress={() => {
                                        this._goToPage('IconLoaderPage')
                                    }}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='ImgCachePage'
                                    onPress={() => {
                                        this._goToPage('ImgCachePage')
                                    }}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='VectorIconsPage'
                                    onPress={() => {
                                        this._goToPage('VectorIconsPage')
                                    }}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='ProductDetail'
                                    onPress={() => {
                                        this._goToPage('ProductDetail')
                                    }}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='FlatListExample'
                                    onPress={() => {
                                        this._goToPage('FlatListExample')
                                    }}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='tab-scrollable-view-index'
                                    onPress={() => {
                                        this._goToPage('IndexExample')
                                    }}
                                />
                            </View>

                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='Animations'
                                    onPress={() => this._goToPage('Animation')}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='SwiperExample'
                                    onPress={() => {
                                        this._goToPage('SwiperExample')
                                    }}
                                />
                            </View>

                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='AppList'
                                    onPress={() => {
                                        this._goToPage('AppList')
                                    }}
                                />
                            </View>

                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='ShowDeviceInfo'
                                    onPress={this._showDeviceInfo}
                                />
                            </View>


                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='Select Photo from gallery'
                                    onPress={this._selectPhoto}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='Multi_Select Photo from gallery'
                                    onPress={this._select_multi_Photo}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='Capture a Photo'
                                    onPress={this._openCamera}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='QR_Scan'
                                    onPress={this._Scan}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='Test_Custom_Module'
                                    onPress={this._Custom_Module}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='Test_Custom_Toast_Module_1'
                                    onPress={this._Custom_Module_1}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='Test_Custom_Params_Module'
                                    onPress={this._Custom_Param}
                                />
                            </View>
                            <View style={{margin: 10, width: Dimensions.get('window').width}}>
                                <Button
                                    title='OpenCamera'
                                    onPress={this._toCameraPage}
                                />
                            </View>

                            <View style={{borderRadius: 5, borderWidth: 1, borderColor: '#31cd96', margin: 10}}>

                                <Text style={{fontSize: 18, color: 'black', margin: 10}}>
                                    window.width={width + " dp"}
                                </Text>
                                <Text style={{fontSize: 18, color: 'black', margin: 10}}>
                                    window.height={height + " dp"}
                                </Text>
                                <Text style={{fontSize: 18, color: 'black', margin: 10}}>
                                    pixelRatio={pixelRatio}
                                </Text>
                                <Text style={{fontSize: 18, color: 'black', margin: 10}}>
                                    分辨率={width * pixelRatio + "x" + height * pixelRatio}
                                </Text>
                                <Text style={{fontSize: 18, color: 'black', margin: 10}}>
                                    px2pt-width ={px2pt(300)}
                                </Text>
                                <Text style={{fontSize: 18, color: 'black', margin: 10}}>
                                    px2pt-height={px2pt(111)}
                                </Text>
                                <Text style={{fontSize: 18, color: 'black', margin: 10}}>
                                    pt2px-width={pt2px(width)}
                                </Text>
                                <Text style={{fontSize: 18, color: 'black', margin: 10}}>
                                    pt2px-height={pt2px(height)}
                                </Text>

                            </View>
                        </View>
                    </View>
                </PullView>
            </View>
        );
    }

}

const
    styles = StyleSheet.create({
        container: {
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