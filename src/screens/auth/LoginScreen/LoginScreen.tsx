import React from 'react';
import {Alert} from 'react-native';

import {useForm, Controller} from 'react-hook-form';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {Button} from '@components/Button';
import {TextInput} from '@components/TextInput';
import {PasswordInput} from '@components/PasswordInput';

import {ScreenParams} from '@/types';

interface ILoginForm {
  email: string;
  password: string;
}

export const LoginScreen = ({navigation}: ScreenParams<'LoginScreen'>) => {
  const {control, handleSubmit, formState} = useForm<ILoginForm>({
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

  const submitForm = (data: ILoginForm) => {
    Alert.alert('Formulário', JSON.stringify(data));
  };

  return (
    <Screen scrollable>
      <Text preset="headingLarge" mb="s8">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

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
            errorMessage={error?.message}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            containerStyles={{mb: 's20'}}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
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
            containerStyles={{mb: 's20'}}
          />
        )}
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
