import React, { Component,Buffer } from 'react';
import { AppRegistry, Text, Image, View, TextInput, Button, Alert,Linking,StyleSheet,ToastAndroid,ScrollView, FlatList} from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import NewsletterList from './NewsletterList';
import {Actions} from 'react-native-router-flux';
class ListNewslettersComponent extends React.Component {
 onChangeTabBottomNavigation = (idtab) => {
   switch(idtab)
   {
     case 0: Actions.LoginPanel(); break;
     case 1: break;
     case 2: break;
   }
 }
  render() {
    return (
   <View style={{flex:1}}>
  <View style={{flex:10}}>
   <Image
     source={require('./app/images/ic_logo3.png')}
     style={{width: 100, height:100, resizeMode: 'contain', marginTop: -22, marginLeft:16, marginBottom:-22}}
  />
  <View style={{alignItems:'center',justifyContent:'center',flex:9}}>
   <Text style={{color:'#922051', fontWeight: 'bold', fontSize:20}}>
     Lista newsleterów
  </Text>
  <ScrollView>
        <NewsletterList/>
  </ScrollView>
 </View>
</View>
<BottomNavigation
      labelColor="white"
      rippleColor="white"
      style={{ height: 56, flex:1 }}
      activeTab={1}
      onTabChange={(newTabIndex) => this.onChangeTabBottomNavigation(newTabIndex)}
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

export default ListNewslettersComponent;
