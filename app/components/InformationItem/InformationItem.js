import React, {Component} from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import MyWebView from 'react-native-webview-autoheight';
var styles = require('./style');
const InformationItem = (news) => (
    <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.title}>{news.tytul}</Text>
        </View>
        <View style={styles.webview}>
            <MyWebView
                source={{html: news.tresc}}
                startInLoadingState={true}
                scalesPageToFit={true}
                style={styles.mywebview}
            />
        </View>
    </View>
);

export default InformationItem;
