import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {useResetNavigation} from '@hooks/useResetNavigation';

import {Text} from '@components/Text/Text';
import {Button} from '@components/Button/Button';
import {Screen} from '@components/Screen/Screen';
import {FormTextInput} from '@components/Form';

import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema';

export function ForgotPasswordScreen() {
  const {
    control,
    handleSubmit,
    formState,
    reset: resetForm,
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const {resetSuccessScreen} = useResetNavigation();

  const submitForm = (data: ForgotPasswordSchema) => {
    resetSuccessScreen({
      title: 'Enviamos as instruções para seu email',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        variant: 'messageRoundIcon',
        color: 'primary',
      },
    });

    console.log({data});
    resetForm();
  };

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        containerStyles={{mb: 's40'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
      />
    </Screen>
  );
}
