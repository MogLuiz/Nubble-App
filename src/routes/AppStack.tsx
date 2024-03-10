import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppTabNavigator, AppTabNavigatorStackParams} from './AppTabNavigator';
import {SettingsScreen} from '@screens/app';

export type AppStackParams = {
  AppTabNavigator: NavigatorScreenParams<AppTabNavigatorStackParams>;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParams>();

export const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      fullScreenGestureEnabled: true,
    }}
    initialRouteName="AppTabNavigator">
    <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
  </Stack.Navigator>
);
