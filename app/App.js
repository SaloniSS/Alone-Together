//Navigation: https://blog.logrocket.com/navigating-react-native-apps-using-react-navigation/
//Style docs: https://reactnative.dev/docs/image-style-props
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from "react";
import Home from "./views/Home";
import GetSupport from "./views/Resources/GetSupport";
import AddResource from "./views/AddResource";
import Sidebar from './components/sidebar';

export default class App extends Component {
	render() {
		return <GetSupport /> ;
	}
}