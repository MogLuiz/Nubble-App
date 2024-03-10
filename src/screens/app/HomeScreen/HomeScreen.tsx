import React from 'react';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';

import {AppTabScreenParams} from '@types';

export const HomeScreen = ({navigation}: AppTabScreenParams<'HomeScreen'>) => (
  <Screen>
    <Text preset="headingLarge">HomeScreen</Text>
    <Button
      title="Settings"
      onPress={() => navigation.navigate('SettingsScreen')}
    />

    <Button
      title="Favorite"
      onPress={() => navigation.navigate('FavoriteScreen')}
      mt="s14"
    />
  </Screen>
);
