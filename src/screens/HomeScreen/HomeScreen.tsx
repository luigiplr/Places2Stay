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

import styles from './HomeScreen.styles';

import HomeGetawayPartial from '#/components/partial/HomeGetawayPartial';

import { citys, getaways } from './mock_data';
import ScreenPartial from '#/components/partial/ScreenPartial';
import { View } from 'react-native';

export default function HomeScreen() {
    return (
        <ScreenPartial>
            <View style={styles.container}>
                <HomeGetawayPartial getaways={getaways} citys={citys} />
            </View>
        </ScreenPartial>
    );
}
