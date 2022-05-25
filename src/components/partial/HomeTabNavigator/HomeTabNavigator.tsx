import React, { FunctionComponent } from 'react';

import { Icon } from '#/components/base';
import AppTabBar from '#/components/partial/AppTabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '#/components/screens/SettingsScreen';
import CalenderScreen from '#/components/screens/CalenderScreen';
import useSetting from '#/hooks/useSetting';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function HomeTabNavigator({
    children,
}: {
    children: FunctionComponent<any>;
}) {
    const appTheme = useSetting('app.theme')[0] ?? 'lighthouselabs';

    return (
        <Tab.Navigator
            tabBar={AppTabBar}
            initialRouteName="home_tab"
            screenOptions={{ appTheme, headerShown: false }}>
            <Tab.Screen
                name="home_tab"
                component={children}
                options={{
                    icon: (isFocused: boolean) =>
                        appTheme === 'lighthouselabs' ? (
                            <Icon.HomeLocationIcon width="34" height="30" />
                        ) : (
                            <FeatherIcon
                                name="home"
                                size={23}
                                color={isFocused ? '#3394FF' : undefined}
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="other_tab"
                component={CalenderScreen}
                options={{
                    icon: (isFocused: boolean) =>
                        appTheme === 'lighthouselabs' ? (
                            <Icon.CalenderIcon width="34" height="30" />
                        ) : (
                            <FeatherIcon
                                name="calendar"
                                size={23}
                                color={isFocused ? '#3394FF' : undefined}
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="settings_tab"
                component={SettingsScreen}
                options={{
                    icon: (isFocused: boolean) => (
                        <FeatherIcon
                            name="settings"
                            size={appTheme === 'lighthouselabs' ? 30 : 23}
                            color={isFocused ? '#3394FF' : undefined}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
