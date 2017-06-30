import React, { Component,Buffer } from 'react';
import { AppRegistry, Text, Image, View, TextInput, Button, Alert,Linking,StyleSheet,ToastAndroid} from 'react-native';
export default class ListNewsletters extends Component {
static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
  <View>
  <Text>
    Lista newsleterów
  </Text>

</View>
    );
  }
}

AppRegistry.registerComponent('ListNewsletters', () => ListNewsletters);
