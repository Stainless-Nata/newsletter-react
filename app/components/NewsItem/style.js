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
        alignItems: 'center',
        //  alignSelf: 'center',
        justifyContent: 'center',
        // width: Dimensions.get('window').width,
    },
    button:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e36703',
        fontFamily: 'Helvetica',
    }
});
