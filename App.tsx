import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {theme} from '@theme';
import {ThemeProvider} from '@shopify/restyle';

import {Router} from '@routes';

const App = (): React.JSX.Element => (
  <SafeAreaProvider>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </SafeAreaProvider>
);

export default App;
