import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import back from "../../../assets/images/09.jpg"
import { Overlay, TextOverlay } from '../CardStyle';

const Discover = ({ img, title }) => {
    return (
        <ImageBackground source={back} imageStyle={{ borderRadius: 10 }} style={styles.bg}>
            <Overlay>
                <TextOverlay>Garden City</TextOverlay>
            </Overlay>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        width: 250,
        height: 150,
        marginRight: 10
    }
})

export default Discover;
