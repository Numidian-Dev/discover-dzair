import React, { useContext } from 'react';
import { View, StyleSheet, useColorScheme, TextInput, KeyboardAvoidingView, Platform, Pressable, Keyboard } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { colors } from '../Styled/MyColors';
import { context } from '../../context/context';
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {

    const navigation = useNavigation()

    const { apparence } = useContext(context)
    const schemeColor = useColorScheme();
    const colorScheme =
        apparence === "Default"
            ? schemeColor
            : apparence === "Dark"
                ? "dark"
                : "light";
    return (

        <View style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 50,
            position: "relative",

        }}>
            <Pressable onPress={() => navigation.navigate('SearchDetails')} style={{
                width: "80%",
                height: 60,
                backgroundColor: colorScheme === "dark" ? colors.blackSecondary : colors.greySecondary,
                borderRadius: 20,
                paddingLeft: 20,
                color: colorScheme === "dark" ? colors.white : colors.black,
                fontWeight: "bold",
                fontSize: 13
            }}


            >

            </Pressable>
            <FontAwesome6 style={{
                position: "absolute",
                right: 60
            }}
                name="magnifying-glass" size={20} color={colors.grey} />
        </View>

    );
}

const styles = StyleSheet.create({})

export default SearchBar;
