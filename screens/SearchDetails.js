import React, { useContext } from "react";
import { View, StyleSheet, Text, useColorScheme } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import { context } from "../context/context";
import { colors } from "../components/Styled/MyColors";
import NavBar from "../components/NavBar/NavBar";
import { Container } from "../components/Styled/Style";

const SearchDetails = () => {
  const { apparence } = useContext(context);
  const route = useRoute();
  const nameScreen = route.name;

  const schemeColor = useColorScheme();
  const colorScheme =
    apparence === "Default"
      ? schemeColor
      : apparence === "Dark"
      ? "dark"
      : "light";

  return (
    <Container theme={colorScheme}>
      <View style={{ height: "100%", position: "relative" }}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <Searchbar
            placeholder="Search"
            placeholderTextColor={colors.grey}
            style={{
              width: "90%",
              margin: "auto",
              fontWeight: "bold",
              backgroundColor:
                colorScheme === "dark"
                  ? colors.blackSecondary
                  : colors.greySecondary,
            }}
          />
        </View>
        <NavBar nameScreen={nameScreen} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default SearchDetails;
