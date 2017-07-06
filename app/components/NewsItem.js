import React from 'react';
import { View, Text, StyleSheet, Button, Dimensions} from 'react-native';
import MyWebView from 'react-native-webview-autoheight';
const NewsItem = (news) => (
  <View>
    <Text style={styles.title}>
      {news.tytul}
    </Text>
    <Text>
      {(news.autor=="") ? "" : "Autor: "+news.autor}
    </Text>
    <Text>
      {(news.publikator=="") ? "" : "Publikator: "+news.publikator}
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
  button:{
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e36703',
    fontFamily: 'Helvetica',
  }
});
export default NewsItem;
