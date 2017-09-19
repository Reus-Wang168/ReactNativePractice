import React, {Component} from 'react'

import glamorous from 'glamorous-native'

const RoundButton = glamorous.view({
    width: 120,
    height: 30,
    margin:10,
    backgroundColor: '#00a151',
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center'
});

export default RoundButton;