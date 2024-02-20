import React from 'react';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';

export const SettingsScreen = () => (
  <Screen canGoBack>
    <Text preset="headingSmall">SettingsScreen</Text>
    <Button title="Settings" />
  </Screen>
);
