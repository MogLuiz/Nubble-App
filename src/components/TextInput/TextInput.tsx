import React from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';

import {Box, BoxProps} from '@components/Box';
import {Text} from '@components/Text';

interface ITextInputProps extends TextInputProps {
  label: string;
}

export const TextInput = ({label, ...rest}: ITextInputProps) => (
  <Box>
    <Text preset="paragraphMedium" mb="s4">
      {label}
    </Text>
    <Box {...$textInputContainer}>
      <RNTextInput
        {...rest}
        style={{height: 50, borderWidth: 1, borderRadius: 8, padding: 16}}
      />
    </Box>
  </Box>
);

const $textInputContainer: BoxProps = {
  borderWidth: 1,
  padding: 's16',
  borderColor: 'gray4',
  borderRadius: 's12',
};
