import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  FavoriteScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@screens/app';
import {AppTabBar} from '@components/AppTabBar';

export type AppTabNavigatorStackParams = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabNavigatorStackParams>();

export const AppTabNavigator = () => {
  const renderCustomAppTabBar = (props: BottomTabBarProps) => (
    <AppTabBar {...props} />
  );

  return (
    <Tab.Navigator
      tabBar={renderCustomAppTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
};
