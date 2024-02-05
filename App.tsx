import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {theme} from '@theme';
import {ThemeProvider} from '@shopify/restyle';

import {LoginScreen} from '@screens/auth/LoginScreen';
import {SignUpScreen} from '@screens/auth/SignUpScreen';

const App = (): React.JSX.Element => (
  <SafeAreaProvider>
    <ThemeProvider theme={theme}>
      {/* <LoginScreen /> */}
      <SignUpScreen />
    </ThemeProvider>
  </SafeAreaProvider>
);

export default App;
