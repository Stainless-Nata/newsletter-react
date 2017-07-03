import React, { Component,Buffer } from 'react';
import { AppRegistry} from 'react-native';
import LoginComponent from './LoginComponent';
import Router from './Router.js';

 export default class AwesomeProject extends Component {
   render() {
    return (
     <Router></Router>
    );
  }
 }


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
