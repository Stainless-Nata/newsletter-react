

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
import TitleItem from './TitleItem';
import InformationItem from './InformationItem';
import BanerItem from './BanerItem';
import NewsItem from './NewsItem';
const base64 = require('base-64');
var API_URL = 'http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/DefaultProfil/getNewsleter?apiKey=2esde2%23derdsr%23RD';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
import {Actions} from 'react-native-router-flux';
class ListViewNews extends React.Component {
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
  }

  render() {
    return (
      <View>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(news)=>this.renderNews(news)}
//        renderRow={(rowdata,sectionID)=><Row {...rowdata,...sectionID}/>}
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
        <TitleItem {...news} />
    );
    break;
    case "1":
    return (
      <InformationItem {...news} />

    );
    break;
    case "2":
    return (
      <NewsItem {...news} />
    );
    break;
    case "3":
    return (
      <BanerItem {...news} />
    );
    break;
    default:
    return null
    break;
    }
};
}

export default ListViewNews;
