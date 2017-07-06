import React from 'react';
import { View, Image, StyleSheet,PixelRatio } from 'react-native';
var styles = require('./style');
const BanerItem = (news) => (
    <View style={styles.baner}>
        <Image
            source={{uri: news.image.link}}
            style={{
                width: parseInt(news.image.width, 10)/PixelRatio.get(),
                height: parseInt(news.image.height, 10)/PixelRatio.get(),
            }}
        />
    </View>
);
export default BanerItem;
