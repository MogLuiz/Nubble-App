import React from 'react';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';
import {TextInput} from '@components/TextInput';
import {PasswordInput} from '@components/PasswordInput';

export const LoginScreen = ({navigation}) => {
  const handleNavigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <Screen scrollable>
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

      <PasswordInput label="Senha" placeholder="Digite sua senha" />

      <Text mt="s10" preset="paragraphSmall" bold color="primary">
        Esqueci minha senha
      </Text>

      <Button mt="s48" title="Entrar" />
      <Button
        mt="s12"
        preset="outline"
        title="Criar uma conta"
        onPress={handleNavigateToSignUpScreen}
      />
    </Screen>
  );
};
