import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginView from '../layouts/LoginView';
import ListNewslettersView from '../layouts/ListNewslettersView';
import NewsletterDetailsView from '../layouts/NewsletterDetailsView';
import UserPanelView from '../layouts/UserPanelView';

const RouterApp = () =>{
  return (
    <Router>
      <Scene key="LoginView" component={LoginView} hideNavBar={true}/>
      <Scene key="ListNewslettersView" component={ListNewslettersView} hideNavBar={true}/>
      <Scene key="NewsletterDetailsView" component={NewsletterDetailsView} hideNavBar={true}/>
      <Scene key="UserPanelView" component={UserPanelView} hideNavBar={true}/>
    </Router>
  );
};
export default RouterApp;
