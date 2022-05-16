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
import { View, SafeAreaView, ScrollView } from 'react-native';

import styles from './home.styles';

import HomeGetawayPartial from '#/components/partial/HomeGetawayPartial';

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <HomeGetawayPartial />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
