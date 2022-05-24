import ScreenPartial from '#/components/partial/ScreenPartial';
import React from 'react';
import HomeGetawayPartial from '#/components/partial/HomeGetawayPartial';
import { citys, getaways } from './mock_data';
import HomeHeader from '#/components/partial/HomeHeader';

import styles from './HomeScreen.styles';
import { View } from 'react-native';

export const HomeTab = () => {
    return (
        <ScreenPartial>
            <View style={styles.padding}>
                <HomeHeader />
            </View>
        </ScreenPartial>
    );
};
