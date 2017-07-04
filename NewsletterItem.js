

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  TouchableHighlight,
  WebView
} from 'react-native';
import Row from './Row';
const base64 = require('base-64');
var API_URL = 'http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/DefaultProfil/getNewsleter?apiKey=2esde2%23derdsr%23RD';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
import {Actions} from 'react-native-router-flux';
class NewsletterItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource :  ds
    }
  };


  componentWillMount() {
    fetch(API_URL+"&newsletter="+global.idNewsletter,{
      method: 'GET',
      headers:{
       'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
       'Authorization': base64.encode("beinsured:beinsu12"),
       'Authtoken': global.logintoken
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
    this.setState({ dataSource: ds.cloneWithRows(responseData.data.zawartosc) });
    //  alert(JSON.stringify(responseData.data.zawartosc));
      })
      .done();
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(news)=>this.renderNews(news)}
//        renderRow={(rowdata,sectionID)=><Row {...rowdata,...sectionID}/>}

        style={styles.listView}
      />
    );
  };



renderNews = (news) => {
  switch (news.typ) {
    case "0":
    return (
        <View style={styles.row}>
          <Text style={styles.title}>{news.tytul}</Text>
        </View>
    );
    break;
    case "1":
    return (
        <View style={styles.row}>
          <Text style={styles.title}>{news.tytul}</Text>
          <View style={{flexDirection:'column', }}>
          <WebView
            source={{html: news.tresc }}
            scalesPageToFit={true}
            javaScriptEnabled={true}
            mixedContentMode='compatibility'
            startInLoadingState={true}
            style={styles.viewWeb}
          />
        </View>
          </View>
    );
    break;
    default:
    return null
    break;
    }
};
}
var styles = StyleSheet.create({
  row: {
  //  flexDirection: 'row',
     alignItems: 'center',
      flex: 1
  },
  title: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    width: 320,
    marginBottom: 15,
    marginLeft: 16,
    marginRight:16,
    marginTop:22,
  },
  date: {
    fontSize:12,
    marginLeft:20,
    marginRight:20,
    marginBottom:10,
    marginTop:23,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {

  },
  image:{
    width:20,
    height:20,
    marginLeft:16,
    marginBottom:15,
    marginRight:16,
    marginTop: 30,
    resizeMode: 'contain',
  //  justifyContent: 'center',
 //alignItems: 'center'
  },
  viewWeb:{
  alignItems:'stretch',
  justifyContent:'center',
  flexWrap: 'wrap',
  marginLeft:16,
  marginRight:16,
  marginTop:16,
  marginBottom:16,
  }
});

export default NewsletterItem;
