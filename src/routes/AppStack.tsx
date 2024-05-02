import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsScreen, PostCommentScreen} from '@screens/app';
import {AppTabNavigator, AppTabNavigatorStackParams} from './AppTabNavigator';

export type AppStackParams = {
  AppTabNavigator: NavigatorScreenParams<AppTabNavigatorStackParams>;
  SettingsScreen: undefined;
  PostCommentScreen: {
    postId: number;
    postAuthorId: number;
  };
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
    <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
  </Stack.Navigator>
);
