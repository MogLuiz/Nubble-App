import React from 'react';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';

import {AppScreenParams} from '@types';

export const SettingsScreen = ({
  navigation,
}: AppScreenParams<'SettingsScreen'>) => (
  <Screen canGoBack>
    <Text preset="headingSmall">SettingsScreen</Text>
    <Button
      title="New Post"
      onPress={() =>
        navigation.navigate('AppTabNavigator', {
          screen: 'NewPostScreen',
        })
      }
    />
  </Screen>
);
