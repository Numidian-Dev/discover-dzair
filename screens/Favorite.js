import React, { useContext } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { Container, Text } from "../components/Styled/Style";
import { context } from "../context/context";
import { useRoute } from "@react-navigation/native";
import NavBar from "../components/NavBar/NavBar";

const Favorite = () => {
  const { apparence } = useContext(context);
  const schemeColor = useColorScheme();

  const colorScheme =
    apparence === "Default"
      ? schemeColor
      : apparence === "Dark"
      ? "dark"
      : "light";
  const route = useRoute();
  const nameScreen = route.name;

  return (
    <Container theme={colorScheme}>
      <Text theme={colorScheme}>Favorie</Text>
      <NavBar nameScreen={nameScreen} />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Favorite;
