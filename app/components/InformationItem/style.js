'use strict';

var React = require('react-native');
//var Dimensions = require('react-native');
var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({
    row: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        alignItems: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
        marginLeft: 16,
        marginRight:16,
        marginTop:22,
    },
    mywebview:{
        marginTop:16,
        marginBottom:16,
        marginLeft:16,
        marginRight:16,
        alignItems: 'center',
        //  alignSelf: 'center',
        justifyContent: 'center',
        color: 'transparent',
        flex:1,
        //  width: Dimensions.get('window').width,
    },
    container:{
        alignItems:'center',
    },
    webview:{
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        flex:1,
        flexDirection:'row',
        marginTop:16,
        marginBottom:16,
        marginLeft:16,
        marginRight:16,
    },
});
