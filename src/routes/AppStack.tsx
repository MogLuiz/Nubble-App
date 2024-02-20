import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '@screens/app/HomeScreen';
import {SettingsScreen} from '@screens/app/SettingsScreen';

export type AppStackParams = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParams>();

export const AppStack = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerShown: false,
      fullScreenGestureEnabled: true,
    }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
  </Stack.Navigator>
);
