

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
} from 'react-native';
import Row from './Row';
const base64 = require('base-64');
var API_URL = 'http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/DefaultProfil/getListaNewsleter?apiKey=2esde2%23derdsr%23RD';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
import {Actions} from 'react-native-router-flux';
class NewsletterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource :  ds
    }
  };


  componentWillMount() {
    fetch(API_URL,{
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
      this.setState({ dataSource: ds.cloneWithRows(responseData.data) });
      })
      .done();
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(newsletter)=>this.renderNewsletter(newsletter)}
//        renderRow={(rowdata,sectionID)=><Row {...rowdata,...sectionID}/>}

        style={styles.listView}
      />
    );
  };

_onPressButton (idNewsletter) {
  global.idNewsletter=idNewsletter;
Actions.Newsletterdetails();
}


    renderNewsletter = (newsletter) => {
          return (
            <TouchableHighlight onPress={()=>this._onPressButton(newsletter.id)} underlayColor="white">
            <View>
              <View style={styles.row}>
                <Text style={styles.title}>{newsletter.tytul}</Text>
                <Image
                  style={styles.image}
                  source={require('./app/images/arrow.png')}
                />
              </View>
              <View>
                <Text style={styles.date}>{`${newsletter.data_wyslania.substring(0, 10)} ${newsletter.czas_wyslania}`}</Text>
              </View>
            </View>
          </TouchableHighlight>
          );

  };
}
var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
     alignSelf: 'stretch',
    //  flex: 1
  },
  row2: {
    flexDirection: 'row',
     alignSelf: 'stretch',
     backgroundColor: 'gray',
    //  flex: 1
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
});

export default NewsletterList;
