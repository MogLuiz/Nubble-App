import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {theme} from '@theme';

import {Box} from '@components/Box';
import {Text} from '@components/Text';
import {Button} from '@components/Button';
import {TextInput} from '@components/TextInput';

const App = (): React.JSX.Element => (
  <ThemeProvider theme={theme}>
    <SafeAreaView>
      <View style={{paddingHorizontal: 24}}>
        <Text preset="headingLarge" mb="s8">
          Olá
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          Digite seu e-mail e senha para entrar
        </Text>

        <Box mb="s20">
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </Box>
        <Box>
          <TextInput
            errorMessage="Senha inválida"
            label="Senha"
            placeholder="Digite sua senha"
            autoCapitalize="none"
          />
        </Box>

        <Text mt="s10" preset="paragraphSmall" bold color="primary">
          Esqueci minha senha
        </Text>

        <Button mt="s48" title="Entrar" />
        <Button mt="s12" preset="outline" title="Criar uma conta" />
      </View>
    </SafeAreaView>
  </ThemeProvider>
);

export default App;
