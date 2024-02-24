import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppTabNavigator} from './AppTabNavigator';
import {SettingsScreen} from '@screens/app';

export type AppStackParams = {
  AppTabNavigator: undefined;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParams>();

export const AppStack = () => (
  <Stack.Navigator
    initialRouteName="AppTabNavigator"
    screenOptions={{
      headerShown: false,
      fullScreenGestureEnabled: true,
    }}>
    <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
  </Stack.Navigator>
);
