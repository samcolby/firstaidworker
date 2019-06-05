import React from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import Ionicons from "react-native-vector-icons/Ionicons";
import Foundationicons from "react-native-vector-icons/Foundation";
import FontAwesomeicons from "react-native-vector-icons/FontAwesome5";

import {
  StackPeopleNearMe,
  StackProfile,
  StackSettings
} from "./stacknavigators";

import { ScreenMap } from "./screens";

import { COLOURS, ROUTES } from "./Constants";

const getTabIcon = (routeName, focused, tintColor) => {
  if (routeName === ROUTES.TAB.PEOPLE_NEAR_ME) {
    return <Foundationicons name="first-aid" size={25} color={tintColor} />;
  } else if (routeName === ROUTES.TAB.MAP) {
    return <FontAwesomeicons name="map-pin" size={22} color={tintColor} />;
  } else if (routeName === ROUTES.TAB.PROFILE) {
    return <Ionicons name="ios-person" size={30} color={tintColor} />;
  } else if (routeName === ROUTES.TAB.SETTINGS) {
    return <Ionicons name="ios-options" size={25} color={tintColor} />;
  }
};

const BottomNavigator = createBottomTabNavigator(
  {
    [ROUTES.TAB.PEOPLE_NEAR_ME]: StackPeopleNearMe,
    [ROUTES.TAB.MAP]: ScreenMap,
    [ROUTES.TAB.PROFILE]: StackProfile,
    [ROUTES.TAB.SETTINGS]: StackSettings
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        return getTabIcon(routeName, focused, tintColor);
      },
      headerTintColor: COLOURS.NAV_HINTS
    }),
    tabBarOptions: {
      activeTintColor: COLOURS.TAB_HINTS
    }
  }
);

export default createAppContainer(BottomNavigator);
