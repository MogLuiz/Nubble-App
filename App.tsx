import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box';
import {Button} from './src/components/Button';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{padding: 20}}>
          <Text preset="paragraphSmall">Nubble App</Text>

          <Box marginBottom="s24">
            <Button title="Entrar" />
          </Box>
          <Button title="Loading" isLoading />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
