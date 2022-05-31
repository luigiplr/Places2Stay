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

import ScreenPartial from '#/components/partial/ScreenPartial';
import { citys, getaways } from '../HomeScreen/mock_data';

import HomeGetawayPartial from '#/components/partial/HomeGetawayPartial';

export default function ResultsScreen() {
    return (
        <ScreenPartial scoll={false}>
            <HomeGetawayPartial citys={citys} getaways={getaways} />
        </ScreenPartial>
    );
}
