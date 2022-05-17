import ScreenPartial from '#/components/partial/ScreenPartial';
import { Text, View } from 'react-native';
import React from 'react';
import HomeGetawayPartial from '#/components/partial/HomeGetawayPartial';
import { citys, getaways } from './mock_data';
import styles from './HomeScreen.styles';

export const Empty = () => <Text>djsak</Text>;

export const HomeTab = () => (
    <ScreenPartial style={styles.container}>
        <View style={styles.container}>
            <HomeGetawayPartial getaways={getaways} citys={citys} />
        </View>
    </ScreenPartial>
);
