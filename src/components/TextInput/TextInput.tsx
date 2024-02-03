import React, {useRef} from 'react';
import {
  TextStyle,
  Pressable,
  TextInputProps,
  TextInput as RNTextInput,
} from 'react-native';

import {useAppTheme} from '@hooks/useAppTheme';

import {Text} from '@components/Text';
import {Box, BoxProps} from '@components/Box';
import {$fontFamily, $fontSizes} from '@components/Text/utils';

interface ITextInputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  containerStyles?: BoxProps;
}

export const TextInput = ({
  label,
  errorMessage,
  RightComponent,
  containerStyles,
  ...rest
}: ITextInputProps) => {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const handleInputFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <Box {...containerStyles}>
      <Pressable onPress={handleInputFocus}>
        <Text preset="paragraphMedium" mb="s4">
          {label}
        </Text>
        <Box {...$textInputContainer(errorMessage)}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyles}
            {...rest}
          />

          {RightComponent && (
            <Box justifyContent="center" ml="s16">
              {RightComponent}
            </Box>
          )}
        </Box>

        {errorMessage && (
          <Text preset="paragraphSmall" bold color="error">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
};

const $textInputStyles: TextStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  flexGrow: 1,
  flexShrink: 1,
  ...$fontSizes.paragraphMedium,
};

const $textInputContainer = (hasError?: string): BoxProps => ({
  flexDirection: 'row',
  borderWidth: hasError ? 2 : 1,
  borderColor: hasError ? 'error' : 'gray4',
  padding: 's16',
  borderRadius: 's12',
});
