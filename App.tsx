import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {theme} from '@theme';
import {ThemeProvider} from '@shopify/restyle';
import {Toast} from '@components/Toast';

import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@infra/react-query/queryClient';
import {ToastProvider} from '@services/toast/useToast';

import {Router} from '@routes';

const App = (): React.JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <Router />
          <Toast />
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  </QueryClientProvider>
);

export default App;
