/**
 * Created by mac on 2017/9/21.
 */


import {Platform} from 'react-native';
import screen from './screen';
// 基础颜色值
const color = {
    blackGray: '#1a1a1a',        // 重要文字信息,标题名称等待
    heavyGray: '#666666',        //重灰:普通文字信息,例如说明性文字,icon等
    middleGray: '#999999',        //中灰:普通文字信息,例如正文文字信息
    lightMiddleGray: '#b5b5b5',        //中灰:icon文字
    lightGray: '#dddddd',        //浅灰:较少使用,灰色线条
    lightLightGray: '#f1f1f1',        //浅灰:灰色间隔
    lightLighterGray: '#f8f8f8',        //浅灰:浅灰BG
    lightLightestGray: '#fbfbfb',        //浅灰:浅灰BG
    transparent: 'transparent',    //透明色
    orange: '#ed9726',        //橙色深
    lightOrange: '#f7c234',        //橙色浅
    red: '#f23030',        //红色深
    lightRed: '#f26b30',        //红色浅
    green: '#00a151',        //绿色深
    lightGreen: '#68b845',        //绿色浅
    white: 'white',          //白色
    transparentGray: 'rgba(0, 0, 0, 0.3)', //透明黑
}

// 字体大小
const fontSize = {
    mini: 10,              //辅助性文字,较小的文字
    small: 12,              //正文字体
    base: 14,              //正文字体
    big: 16,
    large: 18,
    huge: 24,              //导航栏标题字
}

// icon 大小
const icon = {
    small: 14,
    base: 18,
    middle: 22,
    large: 50,
}

// 空隙大小
const gird = {
    nano: 2,
    mini: 4,
    small: 6,
    base: 8,
    big: 10,
    large: 12,
    huge: 14,
    max: 18,
}
// 空隙大小 px 值
const girdPX = {
    nano: '4px',
    mini: '8px',
    small: '12px',
    base: '16px',
    big: '20px',
    large: '24px',
    huge: '28px',
    max: '36px',
}

// 常用组件高度
const height = {
    nano: 1 / screen.pixelRatio,
    mini: 40,
}

// 语义值
const semantics = {

    primaryColor: color.red,                      //APP主题色,用于强调文字 按钮和icon
    seconderColor: color.lightOrange,             //APP辅助色
    headingTextColor: color.blackGray,            //重要文字信息,标题名称等

    lineHeight: height.nano,                      // 1像素的分割线

}

const badge = {
    backgroundColor: color.red,
    color: color.white,
    fontSize: fontSize.mini,
    dotWidth: 6,                                 // 是小红点时的宽度
    dotHeight: 6,                                // 是小红点时的宽度
    dotBorderRadius: 6 / 2,                         // 是小红点时的圆角
    minWidth: 14,                                // 含有文字的最小宽度
    height: 14,                                  // 含有文字的最小高度
    borderRadius: 14 / 2,                          // 含有文字的圆角
    borderWidth: height.nano,                    // 边框宽度
    textMargin: girdPX.nano,                     // 文本组件距父组件的距离
    textBackgroundColor: color.transparent,       // 文本组件的背景颜色为透明,不要修改
}

const counter = {
    // 加减号的父组件相关UI
    actionView: {
        width: 20,
        height: 20,
        backgroundColor: '#ecedef',
        disabledOpacity: 0.3,                    // 不能点击时的透明度
        opacity: 1.0,                            // 可以点击时的透明度
        iconSize: icon.base                      // 加减号size
    },
    // input组件的父组件相关UI
    inputView: {
        marginLeft: girdPX.nano,                  //距左边组件的距离
        marginRight: girdPX.nano,                 //距右边组件的距离
        width: 30,
        height: 20,
        backgroundColor: '#ecedef',
    }
}

const modalPopups = {
    outerTouchColor: color.transparentGray,
    animatedViewColor: color.transparent,
}


const textButton = {
    disabledOpacity: 0.5,
    defaultWidth: 100,
    defaultHeight: 40,
    borderLine: semantics.lineHeight,
    backgroundColor: color.white,
    defaultTextViewColor: color.transparent,
    gradientPrimaryColor: [color.lightRed, color.red],
    gradientSpecialColor: [color.lightOrange, color.orange],
    gradientTextColor: {
        primary: color.white,
        special: color.white,
        default: color.blackGray,
    },
    textColor: {
        primary: color.red,
        default: color.blackGray,
    },
    gradientBorderColor: color.transparent,

}

/**
 * navigation-bar 组件theme
 */
const navigationBar = {
    backgroundColor: color.white,
    // titleFontSize: fontSize.large,
    titleFontSize: screen.fontScaleSize(20),
    titleColor: color.blackGray,
    itemFontSize: fontSize.big,
    itemContentColor: color.heavyGray,
    navMarginNano: girdPX.nano,
    navMarginMini: screen.px2dp(10),
    navMarginSmall: girdPX.small,
    navMarginBase: girdPX.base,
    navMarginBig: girdPX.big,
    navMarginPlatform: Platform.OS === 'ios' ? girdPX.base : 0,
    navBarHeight: Platform.OS === 'ios' ? 64 : 44,
    barOpacity: 1,
};

/**
 * navigation-search-bar 组件theme
 */
const navigationSearchBar = {
    backgroundColor: color.white,
    textInputFontSize: fontSize.big,
    itemFontSize: fontSize.big,
    itemContentColor: color.heavyGray,
    navBarHeight: Platform.OS === 'ios' ? 64 : 44,
    navPaddingPlatform: Platform.OS === 'ios' ? 20 : 0,
};


const productListItem = {
    outerView: {
        backgroundColor: color.white,
        marginTop: 5,
        marginLeft: 6,
        width: (screen.width - 6) / 2,
    },
    image: {
        width: (screen.width - 6) / 2 - 2 * 5,
        height: (screen.width - 6) / 2 - 2 * 5,
    },
    // 包装所以文字的View
    textView: {
        marginTop: 5,
        marginBottom: 5,
        width: (screen.width - 6) / 2 - 2 * 5,
    },
    titleView: {
        fontSize: 14,
        color: color.blackGray,
    },
    subTextView: {
        marginTop: 3,
        width: (screen.width - 6) / 2 - 2 * 5,
        marginBottom: 3,
    },
    // 人民币标识
    RMBText: {
        fontSize: 10,
        color: color.red,
    },
    // 整钱
    changeText: {
        fontSize: 14,
        color: color.red,
    },
    smallChangeText: {
        fontSize: 10,
        color: color.red,
    },
    commentView: {
        marginTop: 3,
        width: (screen.width - 10) / 2 - 2 * 5,
        marginBottom: 3,
    },
    commentText: {
        fontSize: 12,
        color: color.middleGray,
        marginTop: 2,
    },
    percentageText: {
        color: color.red,
        marginLeft: 10,
    }

}

const productListSquareItem = {
    outerView: {
        backgroundColor: color.white,
        width: screen.width,
    },
    image: {
        width: 130,
        height: 130,
    },
    // 包装所以文字的View
    textView: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        height: 110,
        width: (screen.width - 2 * 5) - 120,
    },
    titleView: {
        marginTop: 5,
        marginLeft: 3,
        fontSize: 14,
        color: color.blackGray,
        lineHeight: 20,
    },
    subTextView: {
        width: (screen.width - 2 * 5) - 120,
        marginBottom: 5,
    },
    // 人民币标识
    RMBText: {
        marginLeft: 3,
        fontSize: 10,
        color: color.red,
    },
    // 整钱
    changeText: {
        fontSize: 14,
        color: color.red,
    },
    smallChangeText: {
        fontSize: 10,
        color: color.red,
    },
    commentText: {
        marginLeft: 3,
        fontSize: 12,
        color: color.middleGray,
        marginTop: 5,
    },
    percentageText: {
        marginLeft: 3,
        color: color.red,
        marginLeft: 10,
    },
    bottomLine: {
        height: semantics.lineHeight,
        backgroundColor: color.lightGray,
        width: (screen.width - 5) - 120,
        bottom: 0,
        right: 0,
    }

}


const productListTabBar = {

    outerView: {
        height: 40,
    },
    iView: {
        width: 60,
        height: height.mini,
    },
    itemText: {
        selectedColor: color.red,
        color: color.heavyGray,
    },
    priceItemRightView: {
        marginLeft: 2,
        height: 16,
    },
    priceItemUpIcon: {
        width: 10,
        height: 10,
    },
    priceItemDownIcon: {
        width: 10,
        height: 10,
        bottom: 0,
    },
    bottomLine: {
        height: semantics.lineHeight,
        backgroundColor: color.lightGray,
        width: screen.width,
        bottom: 0,
        left: 0,
    },

}

const productListFloatView = {

    outerView: {
        backgroundColor: color.transparent,
        right: 10,
        bottom: 30,
    },
    footprintView: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: color.heavyGray,
        opacity: 0.7
    },
    returnTopView: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: color.heavyGray,
        marginTop: 10,
        opacity: 0.7
    }
}

const productList = {
    refreshListHeight: screen.height - navigationBar.navBarHeight - productListTabBar.outerView.height - (Platform.OS == 'ios' ? 0 : 20),
    outerView: {
        backgroundColor: color.lightLightGray,
    },
}


const toast = {
    viewMargin: 15,
    textFont: 14,
    iconSize: 33,
};

const t = {
    color,
    fontSize,
    icon,
    gird,
    girdPX,
    height,
    semantics,
    navigationBar,
    navigationSearchBar,
    badge,
    counter,
    modalPopups,
    textButton,
    productList,
    productListItem,
    productListSquareItem,
    productListTabBar,
    productListFloatView,
    toast,
}