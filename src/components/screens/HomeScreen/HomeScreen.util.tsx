import ScreenPartial from '#/components/partial/ScreenPartial';
import { Text, View } from 'react-native';
import React from 'react';
import HomeGetawayPartial from '#/components/partial/HomeGetawayPartial';
import { citys, getaways } from './mock_data';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from '@react-native-community/blur';

import styles from './HomeScreen.styles';

export const Empty = () => <Text>djsak</Text>;

export const HomeTab = () => {
    const safeArea = useSafeAreaInsets();

    return (
        <ScreenPartial ViewComponent={View} scoll={false}>
            <HomeGetawayPartial
                getaways={getaways}
                citys={citys}
                ListHeaderComponentStyle={{ paddingTop: 37 + safeArea.top }}
            />

            <BlurView
                style={[styles.blur, { height: safeArea.top }]}
                blurType="regular"
                blurAmount={25}
            />
        </ScreenPartial>
    );
};
