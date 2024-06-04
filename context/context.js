import React, { createContext, useState } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { colors } from "../components/Styled/MyColors";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const context = createContext();

export const ContextProvider = ({ children }) => {
  const [apparence, setApparence] = useState("Default");

  const changeApparence = (apparence) => {
    AsyncStorage.setItem("apparence", apparence).then(() => {
      setApparence(apparence);
    });
  };

  AsyncStorage.getItem("apparence").then((value) => {
    setApparence(value);
  });

  return (
    <context.Provider value={{ changeApparence, apparence }}>
      {children}
    </context.Provider>
  );
};

const styles = StyleSheet.create({});
