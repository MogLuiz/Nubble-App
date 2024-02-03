import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {theme} from '@theme';
import {ThemeProvider} from '@shopify/restyle';

import {LoginScreen} from '@screens/auth/LoginScreen';

const App = (): React.JSX.Element => (
  <SafeAreaProvider>
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  </SafeAreaProvider>
);

export default App;
