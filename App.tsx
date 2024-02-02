import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {theme} from '@theme';

import {Text} from '@components/Text';
import {Box} from '@components/Box';
import {Button} from '@components/Button';

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
            placeholder="Digite seu e-mail"
            style={{height: 50, borderWidth: 1, borderRadius: 8, padding: 16}}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </Box>
        <Box>
          <TextInput
            placeholder="Digite sua senha"
            style={{height: 50, borderWidth: 1, borderRadius: 8, padding: 16}}
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
