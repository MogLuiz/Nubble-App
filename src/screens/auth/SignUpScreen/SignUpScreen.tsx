import React from 'react';

import {useForm, Controller} from 'react-hook-form';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';
import {PasswordInput} from '@components/PasswordInput';
import {FormTextInput, FormPasswordInput} from '@components/Form';

import {useResetNavigation} from '@hooks/useResetNavigation';

interface ISignUpForm {
  username: string;
  fullName: string;
  email: string;
  password: string;
}

export const SignUpScreen = () => {
  const {control, handleSubmit, formState} = useForm<ISignUpForm>({
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      username: '',
    },
    mode: 'onChange',
  });

  const {resetSuccessScreen} = useResetNavigation();

  const submitForm = (data: ISignUpForm) => {
    // resetSuccessScreen({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     variant: 'checkRoundIcon',
    //     color: 'success',
    //   },
    // });
    console.log({data});
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
        rules={{required: 'Username é obrigatório'}}
        containerStyles={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="fullName"
        rules={{required: 'Nome obrigatório'}}
        autoCapitalize="words"
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        containerStyles={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        label="E-mail"
        placeholder="Digite seu e-mail"
        containerStyles={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
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
