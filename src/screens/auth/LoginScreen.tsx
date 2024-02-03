import React from 'react';

import {Text} from '@components/Text';
import {Icon} from '@components/Icon';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';
import {TextInput} from '@components/TextInput';

export const LoginScreen = () => (
  <Screen>
    <Text preset="headingLarge" mb="s8">
      Olá
    </Text>
    <Text preset="paragraphLarge" mb="s40">
      Digite seu e-mail e senha para entrar
    </Text>

    <TextInput
      label="E-mail"
      placeholder="Digite seu e-mail"
      keyboardType="email-address"
      autoCapitalize="none"
      containerStyles={{mb: 's20'}}
    />

    <TextInput
      label="Senha"
      placeholder="Digite sua senha"
      autoCapitalize="none"
      RightComponent={<Icon variant="eyeOn" color="gray2" />}
    />

    <Text mt="s10" preset="paragraphSmall" bold color="primary">
      Esqueci minha senha
    </Text>

    <Button mt="s48" title="Entrar" />
    <Button mt="s12" preset="outline" title="Criar uma conta" />
  </Screen>
);
