import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginComponent from './LoginComponent';
import ListNewslettersComponent from './ListNewslettersComponent';
import NewsletterList from './NewsletterList';
import Newsletterdetails from './Newsletterdetails';
import LoginPanel from './LoginPanel';

const RouterComponent = () =>{
  return (
    <Router>
      <Scene key="LoginComponent" component={LoginComponent} hideNavBar={true}/>
      <Scene key="ListNewslettersComponent" component={ListNewslettersComponent} hideNavBar={true}/>
      <Scene key="Newsletterdetails" component={Newsletterdetails} hideNavBar={true}/>
      <Scene key="LoginPanel" component={LoginPanel} hideNavBar={true}/>
    </Router>
  );
};
export default RouterComponent;
