import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {theme} from '@theme';
import {ThemeProvider} from '@shopify/restyle';

import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@infra/react-query/queryClient';

import {Router} from '@routes';

const App = (): React.JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  </QueryClientProvider>
);

export default App;
