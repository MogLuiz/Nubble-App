import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  FavoriteScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@screens/app';

export type AppTabNavigatorStackParams = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabNavigatorStackParams>();

export const AppTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
    <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
    <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
    <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
  </Tab.Navigator>
);
