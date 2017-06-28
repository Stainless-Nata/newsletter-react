/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry, Text, Image, View, TextInput, Button, Alert } from 'react-native';

 export default class AwesomeProject extends Component {
   _onPressButton() {
    Alert.alert('You tapped the button!')
  }
   render() {
     return (
   <View style={{
       marginTop: 20,
       marginBottom: 40,
       flex: 1,
       justifyContent: 'center',
       marginLeft: 40,
       marginRight: 40
     }}>
     <Image
        alignItems='center'
        style={{width: 200, height:200,marginBottom:10, marginTop:10,  resizeMode: 'contain'}}
       source={require('./img/logo.png')}
     />
     <TextInput
       style={{height: 40,marginBottom:10, marginTop:10, borderColor: 'gray', borderWidth: 1, borderRadius: 5, backgroundColor: '#f1f1f1',color:'#5a5b5b'}}
       placeholder='Login'
     />
     <TextInput
       style={{height: 40,marginTop:10, marginBottom:10, borderColor: 'gray', borderWidth: 1, borderRadius: 5, backgroundColor: '#f1f1f1',color:'#5a5b5b'}}
       placeholder='Hasło'
     />
     <View style={{marginTop: 10, marginBottom:10}}>
     <Button
     onPress={this._onPressButton}
    title="Zaloguj"
    color="#ff7200"
    borderColor="#dc6504"
    style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, backgroundColor: '#f1f1f1'}}
  />
</View>
 </View>
     );
   }
 }

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
