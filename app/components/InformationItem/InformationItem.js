import React, {Component} from 'react';
import { StyleSheet, Dimensions, View, Text, WebView, Linking, } from 'react-native';
import MyWebView from 'react-native-webview-autoheight';
var styles = require('./style');
const InformationItem = (news) => (

    <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.title} onPress={() => {
                if (news.link!=null && news.link.toString().contains("http://")){
                    Linking.openURL(news.link.replace('"','').replace('"',''));
                }
                else if (news.link!=null && !news.link.toString().contains("http://")){
                    Linking.openURL("http://"+news.link.replace('"','').replace('"',''))
                }
            }} >{news.tytul}</Text>
        </View>
        <MyWebView
            source={{html: news.tresc}}
            startInLoadingState={true}
            scalesPageToFit={true}
            style={styles.webview}
        />
    </View>
);

export default InformationItem;
