import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import DiscoverCard from './DiscoverCard';
import { colors } from '../../Styled/MyColors';
import Label from '../../Labels/Labels';

const Discover = () => {
    return (
        <View>
            <Label name={"Discover"} />
            <ScrollView horizontal contentContainerStyle={{ flexGrow: 1 }} style={{ width: "100%" }} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row", marginLeft: 15, marginBottom: 20 }}>
                    <DiscoverCard />
                    <DiscoverCard />
                    <DiscoverCard />
                </View>

            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({})

export default Discover;
