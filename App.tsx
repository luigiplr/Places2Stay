/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '#/components/screens/HomeScreen';
import StayScreen from '#/components/screens/StayScreen';
import SearchScreen from '#/components/screens/SearchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" id="root">
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            presentation: 'modal',
            headerShown: false,
          }}>
          <Stack.Screen name="Stay" component={StayScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
