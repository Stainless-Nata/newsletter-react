import React, { Component,Buffer} from 'react';
import { AppRegistry, Text, Image, View, TextInput, Button, Alert,Linking,StyleSheet,ToastAndroid} from 'react-native';
import { StackNavigator,} from 'react-navigation';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import {Actions} from 'react-native-router-flux';
const base64 = require('base-64');
import HR from 'react-native-hr'
var API_URL = 'http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/DefaultProfil/getPakiet?apiKey=2esde2%23derdsr%23RD';
var usernamePassword = 'beinsured:beinsu12';
class UserPanelView extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     rodzaj_konta : 0,
     typ_abonamentu : "",
     okres : "",
     data_konca : "",
     max_ilosc_dostepow : "",
     wykorzystano_ilosc_dostepow : "",
   }
};

componentWillMount = () =>{
fetch(API_URL,{
method: 'GET',
headers:{
 'Accept': 'application/json',
 'Content-Type': 'application/x-www-form-urlencoded',
 'Authorization': base64.encode(usernamePassword),
 'Authtoken': global.logintoken
},
})
.then(res => res.json())
.then((data) => {
   this.setState({
    rodzaj_konta : data.rodzaj_konta,
    typ_abonamentu : data.typ_abonamentu,
    okres: data.okres,
    data_konca: data.data_konca
   });
  //   if (data.rodzaj_konta==3){
  // this.setState({max_ilosc_dostepow: data.max_ilosc_dostepow.toString()});
  // this.setState({wykorzystano_ilosc_dostepow: data.wykorzystano_ilosc_dostepow.toString()});
  // }
//alert(data.rodzaj_konta);
})}



  render() {
    return (
      <View style={{flex:1}}>
     <View style={{flex:10}}>
      <Image
        source={require('../images/ic_logo3.png')}
        style={{width: 100, height:100, resizeMode: 'contain', marginTop: -22, marginLeft:16, marginBottom:-22}}
     />

       <View>
         <Text style={styles.mojekonto}>{"Moje Konto"}</Text>
       <View style={styles.row}>
         <Text style={styles.informacja}>{"Tutaj możesz modyfikować swoje dane podstawowe, które opisują Twoje konto."}</Text>
         <Image
           style={styles.image}
           source={require('../images/arrow.png')}
         />
       </View>
       </View>
       <HR lineColor={'#000000'}/>
       <View>
         <Text style={styles.mojekonto}>{"Abonament"}</Text>
         <View style={{marginLeft:20}}>
           <View style={styles.rowtext}>
             <Text>Typ: </Text>
             <Text>{this.state.typ_abonamentu}</Text>
           </View>
           <View style={styles.rowtext}>
             <Text>Okres: </Text>
             <Text style={styles.text}>{this.state.okres}</Text>
           </View>
           <View style={styles.rowtextlast}>
             <Text>Ważny do: </Text>
             <Text style={styles.text}>{this.state.data_konca}</Text>
           </View>
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
           icon={<Image source={require('../images/myaccount.png')} style={{width: 20, height: 20}}/>}

         />
         <Tab
           barBackgroundColor="#922051"
           label="Newsletter"
           icon={<Image source={require('../images/newsletter.png')} style={{width: 20, height: 20}}/>}
         />
         <Tab
           barBackgroundColor="#9220517"
           label="Wyloguj"
           icon={<Image source={require('../images/logout.png')} style={{width: 20, height: 20}} tintColor='#ffffff'/>}
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
  },
  text:{
    fontWeight: 'bold',
  },
  rowtext:{
    flexDirection: 'row',
  },
  rowtextlast:{
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default UserPanelView;
