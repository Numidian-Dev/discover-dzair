import React, { useContext } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import back from "../../assets/images/back.webp"
import NavBarTop from '../NavBarTop/NavBarTop';
import SearchBar from '../SearchBar/SearchBar';

const Spotlight = () => {
    const windowHeight = Dimensions.get('screen').height;
    const imageHeight = windowHeight * 0.45;

    return (
        <ImageBackground style={{ width: "100%", height: imageHeight }} source={back}>
            <SearchBar />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({})

export default Spotlight;
