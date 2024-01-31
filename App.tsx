import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text variant="paragraphSmall">Olá mundo</Text>
    </SafeAreaView>
  );
}

export default App;
