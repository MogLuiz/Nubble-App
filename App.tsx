import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {theme} from '@theme';

import {Box} from '@components/Box';
import {Text} from '@components/Text';
import {Button} from '@components/Button';

const App = (): React.JSX.Element => (
  <ThemeProvider theme={theme}>
    <SafeAreaView>
      <View style={{padding: 20}}>
        <Text preset="paragraphSmall">Nubble App</Text>

        <Box marginBottom="s24">
          <Button title="Entrar" disabled />
        </Box>
        <Box marginBottom="s24">
          <Button preset="outline" title="Outlier" />
        </Box>
        <Button title="Loading" isLoading />
      </View>
    </SafeAreaView>
  </ThemeProvider>
);

export default App;
