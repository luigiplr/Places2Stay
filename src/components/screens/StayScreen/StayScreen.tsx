/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View, Image } from 'react-native';

import styles from './StayScreen.styles';

import stayData from './mock_data';
import ScreenPartial from '#/components/partial/ScreenPartial';
import { Text } from '#/components/base';
import StayDetailItem from '#/components/partial/StayDetailItem';
import { ScrollView } from 'react-native-gesture-handler';

export default function StayScreen() {
    return (
        <ScreenPartial scoll={false}>
            <Image source={{ uri: stayData.image }} style={styles.image} />

            <View style={styles.content}>
                <Text varient="header">{stayData.title}</Text>
                <Text style={styles.meta}>{stayData.location}</Text>
                <Text style={styles.meta}>{stayData.dates}</Text>

                <ScrollView style={styles.details}>
                    {stayData.details.map(info => (
                        <StayDetailItem
                            title={info.title}
                            details={info.items}
                            key={info.title}
                        />
                    ))}
                </ScrollView>
            </View>
        </ScreenPartial>
    );
}
