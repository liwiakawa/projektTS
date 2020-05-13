import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Entypo, Octicons } from "react-native-vector-icons";


import Home from "../screens/Home";
import RecipeListScreen from "../screens/RecipeListScreen";
import Account from "../screens/Account";
import Lab from "../screens/Lab"
import Colors from "../constans/Colors";

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.white,
        inactiveTintColor: "#ffffff50",
        showLabel: false,
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: Colors.primary,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="light-bulb" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="RecipeListScreen"
        component={RecipeListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="leaf"
              color={color}
              size={size}
            />
          ),
        }}
      />
           <Tab.Screen
        name="Lab"
        component={Lab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo
              name="lab-flask"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
