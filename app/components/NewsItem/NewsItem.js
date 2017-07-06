import React from 'react';
import { View, Text, StyleSheet, Button, Dimensions} from 'react-native';
import MyWebView from 'react-native-webview-autoheight';
var styles = require('./style');
const NewsItem = (news) => (
    <View>
        <Text style={styles.title}>
            {news.tytul}
        </Text>
        <Text>
            {(news.autor=='') ? '' : 'Autor: '+news.autor}
        </Text>
        <Text>
            {(news.publikator=='') ? '' : 'Publikator: '+news.publikator}
        </Text>
        <MyWebView
            source={{html: news.tresc}}
            startInLoadingState={true}
            scalesPageToFit={true}
            automaticallyAdjustContentInsets={true}
            style={styles.mywebview}
        />
        <Button
            title="Dodaj Komentarz"
            style={styles.button}
            color="#ff7200"
        />
    </View>
);
export default NewsItem;
