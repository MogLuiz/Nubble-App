import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {theme} from '@theme';

import {Text} from '@components/Text';
import {Icon} from '@components/Icon';

const App = (): React.JSX.Element => (
  <ThemeProvider theme={theme}>
    <SafeAreaView>
      <View style={{paddingHorizontal: 20}}>
        <Text preset="paragraphSmall">Nubble App</Text>

        <Icon variant="eyeOn" />
        <Icon variant="eyeOff" />
      </View>
    </SafeAreaView>
  </ThemeProvider>
);

export default App;
