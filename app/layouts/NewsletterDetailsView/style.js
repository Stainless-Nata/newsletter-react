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
    menu: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginLeft: 260,
        marginTop: 15,
    },
    picker:{
        width : 24,
        height: 24,
        marginTop:-20,
        marginLeft: 260,
        backgroundColor: 'transparent'
    }
});
