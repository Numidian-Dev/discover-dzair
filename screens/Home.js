import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  useColorScheme,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Keyboard,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Container, Text } from "../components/Styled/Style";
import { context } from "../context/context";
import Spotlight from "../components/Spotlight/Spotlight";
import NavBarTop from "../components/NavBarTop/NavBarTop";
import { Searchbar } from "react-native-paper";
import NavBar from "../components/NavBar/NavBar";
import Discover from "../components/Cards/Discover/Discover";
import Popular from "../components/Cards/Popular/Popular";
import Events from "../components/Cards/Events/Events";

const Home = () => {
  const route = useRoute();
  const nameScreen = route.name;
  const { apparence } = useContext(context);
  const schemeColor = useColorScheme();

  const colorScheme =
    apparence === "Default"
      ? schemeColor
      : apparence === "Dark"
      ? "dark"
      : "light";
  return (
    <Container theme={colorScheme}>
      <ScrollView>
        <Spotlight />
        <NavBarTop />
        <Discover />
        <Popular />
        <Events />
      </ScrollView>
      <NavBar nameScreen={nameScreen} />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Home;
