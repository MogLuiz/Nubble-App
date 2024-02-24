import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from '@screens/app';

export type AppTabNavigatorStackParams = {
  HomeScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabNavigatorStackParams>();

export const AppTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
  </Tab.Navigator>
);
