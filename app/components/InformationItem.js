import React from 'react';
import { View, Text, StyleSheet, WebView, Dimensions } from 'react-native';
import MyWebView from 'react-native-webview-autoheight';
const InformationItem = (news) => (
  <View style={{alignItems:'center'}}>
    <View style={styles.row}>
      <Text style={styles.title}>{news.tytul}</Text>
      </View>
      <View style={{alignItems:'center',alignSelf:'center',justifyContent:'center',}}>
      <MyWebView
        source={{html: news.tresc}}
        startInLoadingState={true}
        scalesPageToFit={true}
        style={styles.mywebview}
      />
    </View>
  </View>
);
const styles = StyleSheet.create({
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
  width: Dimensions.get('window').width,
},
});
export default InformationItem;
