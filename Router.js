import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginComponent from './LoginComponent';
import ListNewslettersComponent from './ListNewslettersComponent';

const RouterComponent = () =>{
  return (
    <Router>
      <Scene key="login" component={LoginComponent} hideNavBar={true}/>
        <Scene key="listNewsletters" component={ListNewslettersComponent} hideNavBar={true}/>
    </Router>
  );
};
export default RouterComponent;
