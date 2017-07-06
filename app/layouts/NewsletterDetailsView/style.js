'use strict';

var React = require('react-native');

var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({
    image:{
        width: 100,
        height:100,
        resizeMode: 'contain',
        marginTop: -22,
        marginLeft:16,
        marginBottom:-22
    },
    scrollview:{
        alignItems:'center',
        justifyContent:'center',
        flex:9
    },
    container:{
        flex: 1
    },
    view:{
        flex:10
    },
    scroll:{
        margin:0
    },
});
