import React from 'react';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';
import {ActivityIndicator} from '@components/ActivityIndicator';

import {AppTabScreenParams} from '@types';

export const MyProfileScreen = ({
  route,
}: AppTabScreenParams<'MyProfileScreen'>) => {
  // const userId = route.params?.userId;

  return (
    <Screen canGoBack>
      <Text preset="headingSmall">MyProfileScreen</Text>
      <Button title="Settings" />
    </Screen>
  );
};
