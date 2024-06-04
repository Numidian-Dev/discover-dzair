import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Card from './Card';
import Label from '../../Labels/Labels';
import { ContainerCard } from '../CardStyle';

const Events = () => {
    return (
        <View style={{ marginBottom: 100 }}>
            <Label name={"Events"} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ width: "100%" }}>
                <ContainerCard >
                    <Card />
                    <Card />
                    <Card />
                </ContainerCard>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Events;
