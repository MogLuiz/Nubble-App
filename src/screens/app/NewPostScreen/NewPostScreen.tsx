import React from 'react';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';

export const NewPostScreen = () => (
  <Screen canGoBack>
    <Text preset="headingSmall">NewPostScreen</Text>
    <Button title="Settings" />
  </Screen>
);
