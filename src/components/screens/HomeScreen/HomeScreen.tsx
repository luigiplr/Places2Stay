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

import { CalenderIcon, HomeLocationIcon } from '#/components/base/Icon';
import AppTabBar from '#/components/partial/AppTabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeTab } from './HomeScreen.util';
import CalendarScreen from '../CalenderScreen/CalendarScreen';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
    return (
        <Tab.Navigator tabBar={AppTabBar} initialRouteName="home_tab">
            <Tab.Screen
                name="home_tab"
                component={HomeTab}
                options={{
                    headerShown: false,
                    icon: <HomeLocationIcon width="34" height="30" />,
                }}
            />
            <Tab.Screen
                name="other_tab"
                component={CalendarScreen}
                options={{
                    icon: <CalenderIcon width="34" height="30" />,
                }}
            />
        </Tab.Navigator>
    );
}
