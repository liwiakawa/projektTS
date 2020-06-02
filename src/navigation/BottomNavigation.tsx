import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import RecipeListScreen from "../screens/RecipeListScreen";
import Account from "../screens/Account";
import LogIn from "../screens/LogIn";

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
  return (
    <Tab.Navigator initialRouteName="LogIn">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarVisible: false,
        }}
      />
          <Tab.Screen
        name="LogIn"
        component={LogIn}
        options={{
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="RecipeListScreen"
        component={RecipeListScreen}
        options={{
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
