import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginComponent from './LoginComponent';
import ListNewslettersComponent from './ListNewslettersComponent';
import NewsletterList from './NewsletterList';
import Newsletterdetails from './Newsletterdetails';

const RouterComponent = () =>{
  return (
    <Router>
      <Scene key="login" component={LoginComponent} hideNavBar={true}/>
      <Scene key="listNewslettersComponent" component={ListNewslettersComponent} hideNavBar={true}/>
      <Scene key="Newsletterdetails" component={Newsletterdetails} hideNavBar={true}/>
    </Router>
  );
};
export default RouterComponent;
