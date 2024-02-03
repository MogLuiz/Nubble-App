import React from 'react';

import {theme} from '@theme';
import {ThemeProvider} from '@shopify/restyle';

import {LoginScreen} from '@screens/auth/LoginScreen';

const App = (): React.JSX.Element => (
  <ThemeProvider theme={theme}>
    <LoginScreen />
  </ThemeProvider>
);

export default App;
