import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export const Router = () => {
  const isAuhenticated = true;

  return (
    <NavigationContainer>
      {isAuhenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
