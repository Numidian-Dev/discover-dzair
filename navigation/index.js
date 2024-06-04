import React, { useState, useContext, useEffect } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, DefaultTheme } from "react-native-paper";
import { View, StyleSheet, useColorScheme } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Home from "../screens/Home";
import Map from "../screens/Map";
import Favorite from "../screens/Favorite";
import Profile from "../screens/Profile";
import { colors } from "../components/Styled/MyColors";
import { context } from "../context/context";

const Tab = createMaterialBottomTabNavigator();

const Index = () => {
  const { apparence } = useContext(context);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      secondaryContainer: "transparent", // Use transparent to disable the little highlighting oval
    },
  };
  const schemeColor = useColorScheme();
  const colorScheme =
    apparence === "Default"
      ? schemeColor
      : apparence === "Dark"
      ? "dark"
      : "light";

  return (
    <Provider theme={theme}>
      <Tab.Navigator
        shifting={false}
        activeColor={colors.green}
        inactiveColor={colors.grey}
        labeled={false}
        barStyle={{
          backgroundColor:
            colorScheme === "dark"
              ? colors.blackSecondary
              : colors.greySecondary,
          width: "85%",
          height: 72,
          borderRadius: 20,
          overflow: "hidden",
          borderColor: "transparent",
          fontWeight: "bold",
          position: "absolute",
          bottom: 25,
          left: 28,
          right: 20,
        }}
        pressColor="transparent"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo style={{ top: -5 }} name="home" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome
                style={{ top: -5 }}
                name="map"
                size={30}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign
                style={{ top: -5 }}
                name="heart"
                size={30}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome
                style={{ top: -5 }}
                name="user"
                size={30}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default Index;
