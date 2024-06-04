import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Label from '../../Labels/Labels';
import Card from './Card';
import { ContainerCard } from '../CardStyle';

const Popular = () => {
    return (
        <View>
            <Label name={"Popular"} />
            <ScrollView horizontal style={{ width: "100%" }} showsHorizontalScrollIndicator={false}>
                <ContainerCard>
                    <Card />
                    <Card />
                    <Card />
                </ContainerCard>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Popular;
