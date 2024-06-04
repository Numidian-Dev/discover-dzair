import React, { useContext } from 'react';
import { View, StyleSheet, useColorScheme, Pressable } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Text } from '../Styled/Style';
import { context } from '../../context/context';
import { colors } from '../Styled/MyColors';

const Label = ({ name, link }) => {
    const { apparence } = useContext(context)
    const schemeColor = useColorScheme();

    const colorScheme =
        apparence === "Default"
            ? schemeColor
            : apparence === "Dark"
                ? "dark"
                : "light";
    return (
        <View style={{ width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 15 }}>
            <View style={{ alignItems: "center", justifyContent: 'space-between', flexDirection: "row", width: "90%", }}>
                <Text style={{ fontSize: 19, fontWeight: "bold" }} theme={colorScheme}>{name}</Text>
                <Pressable style={{ backgroundColor: colorScheme === "dark" ? colors.blackSecondary : colors.greySecondary, width: 70, height: 30, borderRadius: 30, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontWeight: "bold", alignItems: "center", justifyContent: "center", color: colors.grey, fontSize: 12 }}>See all <FontAwesome6 name="angle-right" size={12} color={colors.grey} /></Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Label;
