import React, { Component,Buffer } from 'react';
import { AppRegistry, Text, Image, View, TextInput, Button, Alert,Linking,StyleSheet,ToastAndroid,ScrollView, FlatList} from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
class ListNewsletters extends React.Component {
  _onPressButton = () => {
    var data = {
        "login": 't.chrobak',
        "password": '1234qwer',
        "apiKey": '2esde2#derdsr#RD',
      };

      var formBody = [];
      for (var property in data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
 fetch("http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/RestAuth/signIn/",
 {
 method: 'POST',
 headers:{
  'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  'Authorization': base64.encode("beinsured:beinsu12")
 },
 body: formBody
 })
 .then(function(res){ return res.json(); })
 .then(function(data){
   ToastAndroid.show(JSON.stringify(data.message).replace('"','').replace('"',''), ToastAndroid.SHORT);
   Actions.listNewsletters();
 })
  }
  render() {
    return (
   <View style={{flex:1}}>
  <View style={{flex:10}}>
   <Image
     source={require('./app/images/ic_logo3.png')}
     style={{width: 100, height:100, resizeMode: 'contain', marginTop: -22, marginLeft:16, marginBottom:-22}}
  />
  <View style={{alignItems:'center',justifyContent:'center'}}>
   <Text style={{color:'#922051', fontWeight: 'bold', fontSize:20}}>
     Lista newsleterów
  </Text>
  <ScrollView>
    <FlatList
      data={[
        {key: '1'},
        {key: '2'},
        {key: '3'},
        {key: '4'},
        {key: '5'},
        {key: '6'},
        {key: '8'},
        {key: '9'},
        {key: '10'},
        {key: '11'},
        {key: '12'},
        {key: '13'},
        {key: '14'},
        {key: '15'},
        {key: '16'},
        {key: '18'},
        {key: '19'},
        {key: '20'},
      ]}
      renderItem={({item}) => <Text style={{fontSize: 50,}}>{item.key}</Text>}
    />

  </ScrollView>
 </View>
</View>
<BottomNavigation
      labelColor="white"
      rippleColor="white"
      style={{ height: 56, flex:1 }}
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

export default ListNewsletters;
