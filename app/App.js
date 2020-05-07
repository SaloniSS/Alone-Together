//Navigation: https://blog.logrocket.com/navigating-react-native-apps-using-react-navigation/
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from "react";
import Home from "./views/Home";
import GetSupport from "./views/GetSupport";
import AddResource from "./views/AddResource";
import Sidebar from './components/sidebar';

const Drawer = createDrawerNavigator(
  {
    Home:{ screen: Home},
    GetSupport:{ screen: GetSupport},
    AddResource:{ screen: AddResource}

  },
  {
    initialRouteName: "Home",
    unmountInactiveRoutes: true,
    headerMode: "none",
    contentComponent: props => <Sidebar {...props} />
  }
)

const AppNavigator = createStackNavigator(
  {
    Drawer : {screen: Drawer},
  },
  {
    initialRouteName: "Drawer",
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
	render() {
		return <AppContainer /> ;
	}
}