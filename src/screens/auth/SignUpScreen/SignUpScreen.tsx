import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {useResetNavigation} from '@hooks/useResetNavigation';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';
import {FormTextInput, FormPasswordInput} from '@components/Form';

import {signUpSchema, SignUpSchema} from './signUpSchema';

export const SignUpScreen = () => {
  const {control, handleSubmit, formState, reset} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      username: '',
    },
    mode: 'onChange',
  });

  const {resetSuccessScreen} = useResetNavigation();

  const submitForm = (data: SignUpSchema) => {
    resetSuccessScreen({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        variant: 'checkRoundIcon',
        color: 'success',
      },
    });

    console.log({data});
    reset();
  };

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        placeholder="@"
        name="username"
        label="Seu username"
        control={control}
        containerStyles={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="fullName"
        autoCapitalize="words"
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        containerStyles={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        containerStyles={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        containerStyles={{mb: 's48'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  );
};
