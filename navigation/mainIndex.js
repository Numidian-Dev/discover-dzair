import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Index from ".";
import SearchDetails from "../screens/SearchDetails";
import Details from "../screens/Details";
import Home from "../screens/Home";
import Map from "../screens/Map";
import Favorite from "../screens/Favorite";
import Profile from "../screens/Profile";
const DetailsNav = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            presentation: "transparentModel",
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{
            headerShown: false,
            presentation: "transparentModel",
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Favorite"
          component={Favorite}
          options={{
            headerShown: false,
            presentation: "transparentModel",
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            presentation: "transparentModel",
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="SearchDetails"
          component={SearchDetails}
          options={{
            headerShown: false,
            presentation: "transparentModel",
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
            presentation: "transparentModel",
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default DetailsNav;
