/**
 * Created by Rookie on 2017/8/29.
 */

import React, {PropTypes} from 'react'

import {requireNativeComponent, View} from 'react-native';

class MyViewPager extends React.Component {


    // Override styles so that each page will fill the parent. Native component
    // will handle positioning of elements, so it's not important to offset
    // them correctly.
    _childrenWithOverridenStyle = (): Array => {
        return React.Children.map(this.props.children, function (child) {

            console.log("+++++++++++++" + child);

            if (!child) {
                return null;
            }
            var newProps = {
                ...child.props,
                style: {
                    backgroundColor: 'green',
                    margin: 20,
                    width: 200,
                    height: 200,
                },
                collapsable: false,
            };
            if (child.type &&
                child.type.displayName &&
                (child.type.displayName !== 'RCTView') &&
                (child.type.displayName !== 'View')) {
                // console.warn('Each ViewPager child must be a <View>. Was ' + child.type.displayName);
            }

            var description = "";
            for (var i in newProps.children.props) {
                var property = newProps.children.props[i];
                description += i + " = " + property + "\n";
            }

            console.log("------------------" + description);

            return React.createElement(child.type, newProps);
        });
    };


    render() {
        return (<MyViewPagerAndroid
            {...this.props}
            style={this.props.style}
            children={this._childrenWithOverridenStyle()}/>)
    }
}


MyViewPager.propTypes = {
    ...View.propTypes
};

let MyViewPagerAndroid = requireNativeComponent('MyAndroidViewPager', MyViewPager);

module.exports = MyViewPager;