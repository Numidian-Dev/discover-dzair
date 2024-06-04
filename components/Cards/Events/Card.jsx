import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import back from "../../../assets/images/09.jpg"
import { Overlay } from '../CardStyle';
import { BlurView } from 'expo-blur';

const Card = () => {
    return (
        <ImageBackground source={back} imageStyle={{ borderRadius: 10 }} style={styles.bg}>
            <Overlay>
                <View style={{ width: "90%", height: "40%", backgroundColor: "rgba(255, 255, 255, 0.449)", position: "absolute", bottom: 10, borderRadius: 10, marginLeft: 12 }}>
                    <Text style={{ marginTop: 10, marginLeft: 10 }}>
                        Le Lorem Ipsum est simplement du
                        faux texte employé dans la composition
                    </Text>
                    <View style={{ backgroundColor: "rgba(229, 229, 229, 0.5)", width: 60, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 10, position: "absolute", bottom: 15, right: 20 }}>
                        <Text style={{ fontWeight: "bold", }}>Visit</Text>
                    </View>
                </View>
            </Overlay>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        width: 220,
        height: 280,
        backgroundColor: "red",
        borderRadius: 10,
        marginRight: 10,

    }
})

export default Card;
