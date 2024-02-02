import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {theme} from '@theme';
import {EyeOffIcon} from '@assets/icons/EyeOffIcon';

import {Text} from '@components/Text';
import {EyeOnIcon} from '@assets/icons/EyeOnIcon';

const App = (): React.JSX.Element => (
  <ThemeProvider theme={theme}>
    <SafeAreaView>
      <View style={{paddingHorizontal: 20}}>
        <Text preset="paragraphSmall">Nubble App</Text>

        <EyeOffIcon color="blue" />
        <EyeOnIcon color="red" />
      </View>
    </SafeAreaView>
  </ThemeProvider>
);

export default App;
