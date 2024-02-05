import React from 'react';

import {Text} from '@components/Text';
import {Icon} from '@components/Icon';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';
import {TextInput} from '@components/TextInput';

export const SignUpScreen = () => {
  const handleSubmitForm = () => {};

  return (
    <Screen canGoBack>
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

      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        autoCapitalize="none"
        containerStyles={{mb: 's48'}}
        RightComponent={<Icon variant="eyeOn" color="gray2" />}
      />

      <Button onPress={handleSubmitForm} title="Criar uma conta" />
    </Screen>
  );
};
