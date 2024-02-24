import React from 'react';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';

export const FavoriteScreen = () => (
  <Screen canGoBack>
    <Text preset="headingSmall">FavoriteScreen</Text>
    <Button title="Settings" />
  </Screen>
);
