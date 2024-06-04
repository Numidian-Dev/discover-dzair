import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import back from "../../../assets/images/09.jpg"
import { Overlay, TextOverlay } from '../CardStyle';
const Card = () => {
    return (
        <ImageBackground source={back} imageStyle={{ borderRadius: 10, }} style={styles.bg}>
            <Overlay>
                <TextOverlay>Garden City</TextOverlay>
            </Overlay>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        width: 190,
        height: 140,
        marginRight: 10
    }
})

export default Card;
