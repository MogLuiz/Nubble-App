import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';

import {Box, BoxProps} from '@components/Box';
import {Text} from '@components/Text';
import {$fontFamily, $fontSizes} from '@components/Text/utils';
import {useAppTheme} from '@/hooks/useAppTheme';

interface ITextInputProps extends TextInputProps {
  label: string;
}

export const TextInput = ({label, ...rest}: ITextInputProps) => {
  const {colors} = useAppTheme();

  return (
    <Box>
      <Text preset="paragraphMedium" mb="s4">
        {label}
      </Text>
      <Box {...$textInputContainer}>
        <RNTextInput
          placeholderTextColor={colors.gray2}
          style={$textInputStyles}
          {...rest}
        />
      </Box>
    </Box>
  );
};

const $textInputStyles: TextStyle = {
  borderWidth: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};

const $textInputContainer: BoxProps = {
  borderWidth: 1,
  padding: 's16',
  borderColor: 'gray4',
  borderRadius: 's12',
};
