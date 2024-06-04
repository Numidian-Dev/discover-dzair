import React, { useContext } from "react";
import { View, StyleSheet, Text, useColorScheme, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../Styled/MyColors";
import { context } from "../../context/context";
import { useNavigation } from "@react-navigation/native";

const NavBar = ({ nameScreen }) => {
    const navigation = useNavigation()
    const { apparence } = useContext(context);
    const schemeColor = useColorScheme();
    const colorScheme =
        apparence === "Default"
            ? schemeColor
            : apparence === "Dark"
                ? "dark"
                : "light";
    return (
        <View
            style={{
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
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "row"
            }}
        >
            <Pressable onPress={() => navigation.navigate("Home")}>
                <Entypo name="home" size={30} color={nameScreen === "Home" || nameScreen === "SearchDetails" ? colors.green : colors.grey} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Map")}>
                <FontAwesome
                    name="map"
                    size={30}
                    color={nameScreen === "Map" ? colors.green : colors.grey}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Favorite")}>
                <AntDesign
                    name="heart"
                    size={30}
                    color={nameScreen === "Favorite" ? colors.green : colors.grey}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Profile")}>
                <FontAwesome
                    name="user"
                    size={30}
                    color={nameScreen === "Profile" ? colors.green : colors.grey}
                />
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({})

export default NavBar;
