import React from 'react';

import {useForm, Controller} from 'react-hook-form';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';
import {TextInput} from '@components/TextInput';
import {PasswordInput} from '@components/PasswordInput';

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

      <Controller
        control={control}
        name="username"
        rules={{required: 'Username é obrigatório'}}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <TextInput
            label="Seu username"
            placeholder="@"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            errorMessage={error?.message}
            containerStyles={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="fullName"
        rules={{required: 'Nome é obrigatório'}}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <TextInput
            label="Nome Completo"
            placeholder="Digite seu nome completo"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            errorMessage={error?.message}
            containerStyles={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail é obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            errorMessage={error?.message}
            containerStyles={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            label="Senha"
            placeholder="Digite sua senha"
            containerStyles={{mb: 's48'}}
          />
        )}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  );
};
