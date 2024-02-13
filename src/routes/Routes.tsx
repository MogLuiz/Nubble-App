import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen, SignUpScreen, SuccessScreen} from '@screens/auth';

export type RootStackParams = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const Router = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
