import React from 'react';

import {Text} from '@components/Text/Text';
import {Icon} from '@components/Icon/Icon';
import {Button} from '@components/Button/Button';
import {Screen} from '@components/Screen/Screen';

import {ScreenParams} from '@types';

export function SuccessScreen({
  route,
  navigation,
}: ScreenParams<'SuccessScreen'>) {
  const {title, description, icon} = route.params;

  const handleGoBackToBegin = () => navigation.goBack();

  return (
    <Screen>
      <Icon {...icon} />
      <Text preset="headingLarge" mt="s24">
        {title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {description}
      </Text>
      <Button onPress={handleGoBackToBegin} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}
