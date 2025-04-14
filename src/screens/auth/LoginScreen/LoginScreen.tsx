import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';

import {useForm} from 'react-hook-form';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';
import {FormTextInput, FormPasswordInput} from '@components/Form';

import {LoginSchema, loginSchema} from './loginSchema';

import {AuthScreenParams} from '@/types';
import {useAuthSignIn} from '@domain/Auth/useCases/useAuthSignIn';
import {useToastActions} from '@services/toast/useToast';

export const LoginScreen = ({navigation}: AuthScreenParams<'LoginScreen'>) => {
  const {showToast} = useToastActions();
  const {isLoading, signIn} = useAuthSignIn({
    onError: message => {
      showToast({message, type: 'error'});
    },
  });
  const {control, handleSubmit, formState, reset} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const handleNavigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleNavigateToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const submitForm = ({email, password}: LoginSchema) => {
    signIn({email, password});
    reset();
  };

  return (
    <Screen scrollable>
      <Text preset="headingLarge" mb="s8">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

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
        containerStyles={{mb: 's20'}}
      />

      <Text
        mt="s10"
        preset="paragraphSmall"
        bold
        color="primary"
        onPress={handleNavigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button
        isLoading={isLoading}
        mt="s48"
        title="Entrar"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
      <Button
        mt="s12"
        preset="outline"
        title="Criar uma conta"
        onPress={handleNavigateToSignUpScreen}
      />
    </Screen>
  );
};
