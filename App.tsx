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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CalenderIcon, HomeLocationIcon } from '#/components/base/Icon';
import AppTabBar from '#/components/partial/AppTabBar';

import HomeScreen from '#/screens/HomeScreen';
import StayScreen from '#/screens/StayScreen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const Empty = () => <Text>djsak</Text>;

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBar={AppTabBar}
      initialRouteName="Home"
      sceneContainerStyle={{
        backgroundColor: '#FFF1D2',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          icon: <HomeLocationIcon width="34" height="30" />,
        }}
      />
      <Tab.Screen
        name="Other"
        component={Empty}
        options={{
          icon: <CalenderIcon width="34" height="30" />,
        }}
      />

      <Tab.Screen name="Stay" component={StayScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
