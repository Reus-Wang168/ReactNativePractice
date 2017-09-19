/**
 * Created by mac on 2017/9/13.
 */

import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const height = Dimensions.get('window').height;

export default {
    /*颜色值*/
    theme_color:'#00a151',              //APP主题色,用于强调文字 按钮和icon
    assist_color:'#f8c802',             //APP辅助色
    heading_color:'#1a1a1a',            //重要文字信息,标题名称等
    heavy_gray_color:'#656565',         //重灰:普通文字信息,例如正文文字信息
    middle_gray_color:'#919191',        //中灰:普通文字信息,例如说明性文字,icon等
    light_middle_gray_color:'#c7c7c7',  //中灰:视情况使用
    light_gray_color:'#e5e5e5',         //浅灰:较少使用,灰色线条
    light_light_gray_color:'#111111',   //浅灰:背景色等
    blue_gray_color:'#',                //蓝灰色:小面积的衬托,模块的区分
    orange_color:'#fd6d50',             //橙色
    orange_yellow_color:'#f6bb43',      //橙黄色
    yellow_color:'#eceb49',             //黄色
    green_color:'#43cf76',              //绿色
    light_green_color:'#add036',        //浅绿色
    blue_color:'#206bf0',               //蓝色
    red_color:'#ec3636',                //红色
    pink_color:'#f94a7s',               //粉色
    light_blue_color:'#3ca2fb',         //浅蓝色
    white_color:'white',

    /*文字大小*/
    bigger_text:18,        //较大的标题字
    nav_text:16,           //导航栏标题字
    body_text:14,          //正文字体
    smaller_body_text:12,  //正文字体
    smaller_text:10,       //辅助性文字,较小的文字
    /*图标大小*/
    icon_1:44,
    icon_2:40,
    icon_3:36,
    icon_4:30,
    icon_5:24,
    icon_6:20,
    /*间隔*/
    space_0:   0,
    space_1:   5,
    space_2:   10,
    space_3:   15,
    space_4:   20,

    itemHeight:44,
    itemBorderRadius:22,

    buttonHeight:30,
    buttonBorderRadius:15,

    center:'center',

    row:'row',

    screen_width:width,
    screen_height:height
}