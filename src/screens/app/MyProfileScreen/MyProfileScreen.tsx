import React from 'react';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';

export const MyProfileScreen = () => (
  <Screen canGoBack>
    <Text preset="headingSmall">MyProfileScreen</Text>
    <Button title="Settings" />
  </Screen>
);
