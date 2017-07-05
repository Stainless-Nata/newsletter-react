

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
  WebView,
  Dimensions,
  PixelRatio,
  Button
} from 'react-native';
import MyWebView from 'react-native-webview-autoheight';
import Prompt from 'react-native-prompt';
import Row from './Row';
const base64 = require('base-64');
var API_URL = 'http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/DefaultProfil/getNewsleter?apiKey=2esde2%23derdsr%23RD';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
import {Actions} from 'react-native-router-flux';
class NewsletterItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource :  ds,
      promptVisible: false
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
//      alert(Dimensions.get('window').width.toString());
  }

  render() {
    return (
      <View>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(news)=>this.renderNews(news)}
//        renderRow={(rowdata,sectionID)=><Row {...rowdata,...sectionID}/>}

        style={styles.listView}
      />
      <View>
      <Prompt
          title="Dodaj Komentarz"
          placeholder="Komentarz"
          visible={this.state.promptVisible}
          onCancel={ () => this.setState({
         promptVisible: false,
       }) }
       onSubmit={ (value) => this.setState({
         promptVisible: false,
       }) }
        />
      </View>
      </View>
    );
  };
onDodajKomentarz =()=>{
  this.setState({promptVisible : true});
}


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
    break;
    case "2":
    return (
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
          onPress={this.onDodajKomentarz}
        />
      </View>
    );
    break;
    case "3":
    return (
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
    break;
    default:
    return null
    break;
    }
};
}
var styles = StyleSheet.create({
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
  date: {
    fontSize:12,
    marginLeft:20,
    marginRight:20,
    marginBottom:10,
    marginTop:23,
  },
  baner: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
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
  mywebview:{
  marginTop:16,
  marginBottom:16,
  alignItems: 'center',
//  alignSelf: 'center',
  justifyContent: 'center',
  width: Dimensions.get('window').width,
},
  titlemessage:{

    alignItems: 'center',
    //justifyContent: 'center',
  //  alignSelf: 'center',
  marginLeft: 50,
  marginRight: 50,
    width: Dimensions.get('window').width,
  },
  button:{
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e36703',
    fontFamily: 'Helvetica',
  }
});

export default NewsletterItem;
