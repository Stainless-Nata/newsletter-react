import React, { Component } from "react";
import LoginComponent from "./LoginComponent.js";
import ListNewslettersComponent from "./ListNewslettersComponent.js";
import { DrawerNavigator } from "react-navigation";
const LoginComponentRouter = DrawerNavigator(
  {
    LoginComponent: { screen: LoginComponent },
    ListNewslettersComponent: { screen: ListNewslettersComponent }
  }
);
export default LoginComponentRouter;
