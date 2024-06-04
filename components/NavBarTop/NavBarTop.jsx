import React, { useState, useContext } from 'react';
import { View, StyleSheet, useColorScheme, Pressable, ScrollView } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { colors } from '../Styled/MyColors';
import { context } from '../../context/context';
import { Text } from "../Styled/Style"
import { IconFilter } from './NavBarTopStyle';



const NavBarTop = () => {
    const [filter, setFilter] = useState("all");
    const { apparence } = useContext(context);

    const schemeColor = useColorScheme();
    const colorScheme =
        apparence === "Default"
            ? schemeColor
            : apparence === "Dark"
                ? "dark"
                : "light";

    const filterTab = (index) => {
        setFilter(index)
    }
    return (
        <View style={{
            backgroundColor: colorScheme === "dark" ? colors.blackSecondary : colors.greySecondary,
            width: "85%",
            height: 80,
            borderRadius: 20,
            left: 28,
            right: 20,
            top: -40,
            alignItems: 'center',
            justifyContent: "center"
        }}>
            <ScrollView
                horizontal
                contentContainerStyle={{ flexGrow: 1 }}
                style={{ width: "90%", }}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ flexDirection: "row" }}>
                    <IconFilter onPress={() => setFilter("all")} >
                        <FontAwesome6 name="earth-africa" size={20} color={filter === "all" ? colors.green : colors.grey} />
                        <Text style={{ fontSize: 12, marginTop: 5, color: filter === "all" ? colors.green : colors.grey }} theme={colorScheme} > All </Text>
                    </IconFilter>
                    <IconFilter onPress={() => setFilter("beach")}>
                        <FontAwesome6 name="umbrella-beach" size={20} color={filter === "beach" ? colors.green : colors.grey} />
                        <Text style={{ fontSize: 12, marginTop: 5, color: filter === "beach" ? colors.green : colors.grey }} theme={colorScheme}> Beach </Text>
                    </IconFilter>
                    <IconFilter onPress={() => setFilter("restaurent")}>
                        <FontAwesome6 name="utensils" size={20} color={filter === "restaurent" ? colors.green : colors.grey} />
                        <Text style={{ fontSize: 12, marginTop: 5, color: filter === "restaurent" ? colors.green : colors.grey }} theme={colorScheme}> Restaurent </Text>
                    </IconFilter>
                    <IconFilter onPress={() => setFilter("museum")}>
                        <FontAwesome6 name="building-columns" size={20} color={filter === "museum" ? colors.green : colors.grey} />
                        <Text style={{ fontSize: 12, marginTop: 5, color: filter === "museum" ? colors.green : colors.grey }} theme={colorScheme}> Museum </Text>
                    </IconFilter>
                    <IconFilter onPress={() => setFilter("park")}>
                        <FontAwesome6 name="tree" size={20} color={filter === "park" ? colors.green : colors.grey} />
                        <Text style={{ fontSize: 12, marginTop: 5, color: filter === "park" ? colors.green : colors.grey }} theme={colorScheme}> Park </Text>
                    </IconFilter>
                    <IconFilter onPress={() => setFilter("hotel")}>
                        <FontAwesome6 name="hotel" size={20} color={filter === "hotel" ? colors.green : colors.grey} />
                        <Text style={{ fontSize: 12, marginTop: 5, color: filter === "hotel" ? colors.green : colors.grey }} theme={colorScheme}> Hotel </Text>
                    </IconFilter>
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({})

export default NavBarTop;
