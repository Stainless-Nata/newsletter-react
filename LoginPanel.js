import React, { Component,Buffer} from 'react';
import { AppRegistry, Text, Image, View, TextInput, Button, Alert,Linking,StyleSheet,ToastAndroid} from 'react-native';
import ListNewslettersComponent from './ListNewslettersComponent';
import { StackNavigator,} from 'react-navigation';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import {Actions} from 'react-native-router-flux';
const base64 = require('base-64');
import HR from 'react-native-hr'
var API_URL = 'http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/DefaultProfil/getPakiet?apiKey=2esde2%23derdsr%23RD';
class LoginPanel extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     rodzaj_konta : 0,
     typ_abonamentu : "",
     okres : "",
     data_konca : "",
     max_ilosc_dostepow :"",
     wykorzystano_ilosc_dostepow : "",
   }
};

 onOpen=()=> {
fetch(API_URL,{
method: 'GET',
headers:{
 'Accept': 'application/json',
   'Content-Type': 'application/x-www-form-urlencoded',
 'Authorization': base64.encode("beinsured:beinsu12"),
 'Authtoken': global.logintoken
},
})
.then(function(res){ return res.json(); })
.then(function(data){
  this.setState({rodzaj_konta : data.rodzaj_konta});
  this.setState({typ_abonamentu : data.typ_abonamentu.toString()});
  this.setState({okres: data.okres.toString()});
  this.setState({data_konca: data.data_konca});
    if (data.rodzaj_konta==3){
  this.setState({max_ilosc_dostepow: data.max_ilosc_dostepow.toString()});
  this.setState({wykorzystano_ilosc_dostepow: data.wykorzystano_ilosc_dostepow.toString()});
  }
  alert(this.state.typ_abonamentu);
})
 }



  render() {
    this.onOpen();
    return (
      <View style={{flex:1}}>
     <View style={{flex:10}}>
      <Image
        source={require('./app/images/ic_logo3.png')}
        style={{width: 100, height:100, resizeMode: 'contain', marginTop: -22, marginLeft:16, marginBottom:-22}}
     />

       <View>
         <Text style={styles.mojekonto}>{"Moje Konto"}</Text>
       <View style={styles.row}>
         <Text style={styles.informacja}>{"Tutaj możesz modyfikować swoje dane podstawowe, które opisują Twoje konto."}</Text>
         <Image
           style={styles.image}
           source={require('./app/images/arrow.png')}
         />
       </View>
       </View>
       <HR lineColor={'#000000'}/>
       <View>
         <Text style={styles.mojekonto}>{"Abonament"}</Text>
         <View style={{marginLeft:20}}>
         <Text>{'Typ: '+this.state.typ_abonamentu}</Text>
         <Text>{'Okres: '+this.state.okres}</Text>
         <Text>{'Ważny do: '+this.state.data_wyslania}</Text>
         </View>
       </View>
       <HR lineColor={'#000000'}/>
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
    marginBottom: 10,
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
    marginTop: 20,
    resizeMode: 'contain',
    transform: [
    { rotate: '90deg'}],
  //  justifyContent: 'center',
 //alignItems: 'center'
  },
  mojekonto:{
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
  informacja:{
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    marginBottom: 15,
    marginLeft: 16,
    marginRight:16,
    marginTop:10,
  }
});

export default LoginPanel;
