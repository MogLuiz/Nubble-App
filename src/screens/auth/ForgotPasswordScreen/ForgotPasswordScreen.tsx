import React from 'react';

import {Text} from '@components/Text/Text';
import {Button} from '@components/Button/Button';
import {Screen} from '@components/Screen/Screen';
import {TextInput} from '@components/TextInput/TextInput';

import {useResetNavigation} from '@hooks/useResetNavigation';

export function ForgotPasswordScreen() {
  const {resetSuccessScreen} = useResetNavigation();

  const handleSubmitForm = () => {
    resetSuccessScreen({
      title: 'Enviamos as instruções para seu email',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        variant: 'messageRoundIcon',
        color: 'primary',
      },
    });
  };

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        containerStyles={{mb: 's40'}}
      />
      <Button onPress={handleSubmitForm} title="Recuperar senha" />
    </Screen>
  );
}
