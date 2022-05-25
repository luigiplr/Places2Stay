import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import HomeScreen from '#/components/screens/HomeScreen';
import StayScreen from '#/components/screens/StayScreen';
import SearchScreen from '#/components/screens/SearchScreen';
import useSetting from '#/hooks/useSetting';
import { TransitionPresets } from '@react-navigation/stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const NativeStack = createNativeStackNavigator();
const SharedStack = createSharedElementStackNavigator();

export default function App() {
    const appTheme = useSetting('app.theme')[0] ?? 'lighthouselabs';

    if (appTheme === 'greatnotgood') {
        return (
            <NavigationContainer>
                <SharedStack.Navigator
                    initialRouteName="Home"
                    screenOptions={{ headerShown: false }}>
                    <SharedStack.Screen name="Home" component={HomeScreen} />

                    <SharedStack.Screen
                        name="Stay"
                        component={StayScreen}
                        options={{
                            ...TransitionPresets.ModalSlideFromBottomIOS,
                            presentation: 'transparentModal',
                            cardStyleInterpolator: ({
                                current: { progress },
                            }) => ({
                                cardStyle: { opacity: progress },
                            }),
                        }}
                    />
                    <SharedStack.Screen
                        name="Search"
                        component={SearchScreen}
                    />
                </SharedStack.Navigator>
            </NavigationContainer>
        );
    }

    return (
        <NavigationContainer>
            <NativeStack.Navigator initialRouteName="Home" id="root">
                <NativeStack.Group screenOptions={{ headerShown: false }}>
                    <NativeStack.Screen name="Home" component={HomeScreen} />
                </NativeStack.Group>

                <NativeStack.Group
                    screenOptions={{
                        presentation:
                            appTheme === 'lighthouselabs'
                                ? 'modal'
                                : 'fullScreenModal',
                        headerShown: false,
                    }}>
                    <NativeStack.Screen name="Stay" component={StayScreen} />
                    <NativeStack.Screen
                        name="Search"
                        component={SearchScreen}
                    />
                </NativeStack.Group>
            </NativeStack.Navigator>
        </NavigationContainer>
    );
}
