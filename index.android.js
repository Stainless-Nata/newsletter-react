import React, { Component,Buffer } from 'react';
import { AppRegistry} from 'react-native';
import LoginComponent from './LoginComponent';

 export default class AwesomeProject extends Component {
   render() {
    return (
     <LoginComponent/>
    );
  }
 }


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
