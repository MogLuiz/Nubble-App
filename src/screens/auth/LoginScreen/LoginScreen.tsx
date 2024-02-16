import React from 'react';
import {Alert} from 'react-native';
import {zodResolver} from '@hookform/resolvers/zod';

import {useForm} from 'react-hook-form';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';
import {FormTextInput, FormPasswordInput} from '@components/Form';

import {LoginSchema, loginSchema} from './loginSchema';

import {ScreenParams} from '@/types';

export const LoginScreen = ({navigation}: ScreenParams<'LoginScreen'>) => {
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

  const submitForm = (data: LoginSchema) => {
    Alert.alert('Formulário', JSON.stringify(data));
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
