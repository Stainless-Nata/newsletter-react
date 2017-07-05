import React, { Component,Buffer } from 'react';
import { AppRegistry, Text, Image, View, TextInput, Button, Alert,Linking,StyleSheet,ToastAndroid,ScrollView, ListView} from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import NewsletterItem from './NewsletterItem';
import ActionBar from 'react-native-action-bar';
import MyMenu from './Menu';
const base64 = require('base-64');
var API_URL = 'http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/DefaultProfil/getNewsleter?apiKey=2esde2%23derdsr%23RD&newsletter=10';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class Newsletterdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource :  ds
    }
  };
  // componentWillMount() {
  //   fetch(API_URL+'&page='+global.idNewsletter,{
  //     method: 'GET',
  //     headers:{
  //      'Accept': 'application/json',
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //      'Authorization': base64.encode("beinsured:beinsu12"),
  //      'Authtoken': global.logintoken
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //     //this.setState({ dataSource: ds.cloneWithRows(responseData.zawartosc) });
  //     alert(JSON.stringify(responseData.data.zawartosc));
  //     })
  //     .done();
  // }
  render() {
    return (
   <View style={{flex:1}}>
  <View style={{flex:10}}>
   {/* <Image
     source={require('./app/images/ic_logo3.png')}
     style={{width: 100, height:100, resizeMode: 'contain', marginTop: -22, marginLeft:16, marginBottom:-22}}
  /> */}
  <MyMenu />
  <View style={{alignItems:'center',justifyContent:'center',flex:9}}>
  <ScrollView style={{margin:0}}>
    <NewsletterItem />
  </ScrollView>
 </View>
</View>
<BottomNavigation
      labelColor="white"
      rippleColor="white"
      style={{ height: 56, flex:1 }}
      activeTab={1}
    //  onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
    >
      <Tab
        barBackgroundColor="#922051"
        label="Moje konto"
        icon={<Image source={require('./app/images/myaccount.png')} style={{width: 20, height: 20}}/>}

      />
      <Tab
        barBackgroundColor="#922051"
        label="Newsletter"
        icon={<Image source={require('./app/images/newsletter.png')} style={{width: 20, height: 20}}/>}
      />
      <Tab
        barBackgroundColor="#9220517"
        label="Wyloguj"
        icon={<Image source={require('./app/images/logout.png')} style={{width: 20, height: 20}} tintColor='#ffffff'/>}
      />
    </BottomNavigation>
    </View>
    );
  }
}

export default Newsletterdetails;
