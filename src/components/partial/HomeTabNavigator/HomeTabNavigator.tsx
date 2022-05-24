import React, { FunctionComponent } from 'react';

import { Icon } from '#/components/base';
import AppTabBar from '#/components/partial/AppTabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '#/components/screens/SettingsScreen';
import CalenderScreen from '#/components/screens/CalenderScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabNavigator({
    children,
}: {
    children: FunctionComponent<any>;
}) {
    return (
        <Tab.Navigator tabBar={AppTabBar} initialRouteName="home_tab">
            <Tab.Screen
                name="home_tab"
                component={children}
                options={{
                    headerShown: false,
                    icon: <Icon.HomeLocationIcon width="34" height="30" />,
                }}
            />
            <Tab.Screen
                name="other_tab"
                component={CalenderScreen}
                options={{
                    headerShown: false,
                    icon: <Icon.CalenderIcon width="34" height="30" />,
                }}
            />
            <Tab.Screen
                name="settings_tab"
                component={SettingsScreen}
                options={{
                    headerShown: false,
                    icon: <Icon.CalenderIcon width="34" height="30" />,
                }}
            />
        </Tab.Navigator>
    );
}
