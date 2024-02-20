import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IIconProps} from '@components/Icon';

import {
  LoginScreen,
  ForgotPasswordScreen,
  SignUpScreen,
  SuccessScreen,
} from '@screens/auth';

export type AuthStackParams = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IIconProps, 'variant' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParams>();

export const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="LoginScreen"
    screenOptions={{
      headerShown: false,
      fullScreenGestureEnabled: true,
    }}>
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
    <Stack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
    />
  </Stack.Navigator>
);
