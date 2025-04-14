import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export const Router = () => {
  const isAuhenticated = false;

  return (
    <NavigationContainer>
      {isAuhenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
