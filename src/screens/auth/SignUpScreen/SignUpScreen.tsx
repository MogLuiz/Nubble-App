import React from 'react';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';
import {TextInput} from '@components/TextInput';
import {PasswordInput} from '@components/PasswordInput';

import {ScreenParams} from '@types';

export const SignUpScreen = ({navigation}: ScreenParams<'SignUpScreen'>) => {
  const handleSubmitForm = () => {
    navigation.navigate('SuccessScreen', {
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        variant: 'checkRoundIcon',
        color: 'success',
      },
    });
  };

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput
        label="Seu username"
        placeholder="@"
        containerStyles={{mb: 's20'}}
      />
      <TextInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        containerStyles={{mb: 's20'}}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        containerStyles={{mb: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        containerStyles={{mb: 's48'}}
      />

      <Button onPress={handleSubmitForm} title="Criar uma conta" />
    </Screen>
  );
};
