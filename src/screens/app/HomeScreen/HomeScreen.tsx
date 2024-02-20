import React from 'react';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';

import {AppScreenParams} from '@types';

export const HomeScreen = ({navigation}: AppScreenParams<'HomeScreen'>) => (
  <Screen>
    <Text preset="headingLarge">HomeScreen</Text>
    <Button
      title="Settings"
      onPress={() => navigation.navigate('SettingsScreen')}
    />
  </Screen>
);
