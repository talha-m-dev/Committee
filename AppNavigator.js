import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./Screens/HomeScreen";
import Lists from "./Screens/Lists";


export default class AppNavigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={24} color={tintColor} />
        )
      }
    },
    Links: {
      screen: Lists,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-link" size={24} color={tintColor} />
        )
      }
    }
    
  },
  {
    tabBarOptions: {
      activeTintColor: "dodgerblue",
      inactiveTintColor: "#CECECE",
      showLabel: false,
      style: {
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "whitesmoke",
        height: 50,
        justifyContent: "center",
        paddingVertical: 5
      }
    }
  }
);


const AppContainer = createAppContainer(TabNavigator);