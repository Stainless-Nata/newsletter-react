import React, { Component} from 'react';
import { AppRegistry, Text, Image, View, TextInput, Button, Alert,Linking,StyleSheet,ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
const base64 = require('base-64');
global.logintoken ='';
global.idNewsletter ='';
export default class LoginView extends Component {
  constructor(props) {
   super(props);
  this.state = {
      username: 't.chrobak',
      password: '1234qwer'
   }
this._onPressButton=this._onPressButton.bind(this);
};

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
  global.logintoken=JSON.stringify(data.login_token).replace('"','').replace('"','');
  Actions.ListNewslettersView();
})
 }



  render() {
    return (
  <View style={{marginTop:100}}>
    <View style={{alignItems:'center',justifyContent:'center'}}>
    <Image
       style={{width: 200,justifyContent:'center', height:200,marginBottom:-10,  resizeMode: 'contain'}}
     source={require('../images/logo.png')}
    />
  </View>
  <View style={{marginLeft:40, marginRight:40}}>
    <TextInput
      style={styles.inputText}
      placeholder='Login'
      underlineColorAndroid= 'transparent'
      placeholderTextColor= '#959595'
      onChangeText={(username) => this.setState({username})}
      value={this.state.username}
    />
    <TextInput
      style={styles.inputText}
      placeholder='Hasło'
      underlineColorAndroid= 'transparent'
      placeholderTextColor= '#959595'
      onChangeText={(password) => this.setState({password})}
      value={this.state.password}
      secureTextEntry={true}
    />
    <View style={{marginTop: 10, marginBottom:10,}}>
    <Button
    onPress={() => this._onPressButton()}
   title="Zaloguj"
   color="#ff7200"
   style={styles.button}
 />
</View>
<Text style={{textAlign: 'center'}}>
 Jeśli nie masz jeszcze konta zarejestruj się na beinsured.pl
</Text>
<Text style={{color: '#922051',textAlign:'center'}}
     onPress={() => Linking.openURL('http://www.beinsured.pl/pakiety/')}>
 Link
</Text>
</View>
</View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  inputText: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f1f1f1',
    color: '#5a5b5b',
    borderColor: '#e6e6e6',
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'OpenSans',
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e36703',
    fontFamily: 'Helvetica',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
