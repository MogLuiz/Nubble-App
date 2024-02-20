import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IIconProps} from '@components/Icon';

import {LoginScreen} from '@screens/auth/LoginScreen';
import {SignUpScreen} from '@screens/auth/SignUpScreen';
import {SuccessScreen} from '@screens/auth/SuccessScreen';
import {ForgotPasswordScreen} from '@screens/auth/ForgotPasswordScreen';

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
