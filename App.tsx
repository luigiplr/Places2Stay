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
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '#/screens/home';
import GatewayScreen from '#/screens/getaway';
import AppTabBar from '#/components/partial/AppTabBar';
import { CalenderIcon, HomeLocationIcon } from '#/components/base/Icon';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={AppTabBar}
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            icon: <HomeLocationIcon width="34" height="30" />,
          }}
        />
        <Tab.Screen
          name="Other"
          component={GatewayScreen}
          options={{
            icon: <CalenderIcon width="34" height="30" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
