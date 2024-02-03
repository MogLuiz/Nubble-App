import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';

import {Box, BoxProps} from '@components/Box';
import {Text} from '@components/Text';
import {$fontFamily, $fontSizes} from '@components/Text/utils';
import {useAppTheme} from '@hooks/useAppTheme';

interface ITextInputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
}

export const TextInput = ({
  label,
  errorMessage,
  RightComponent,
  ...rest
}: ITextInputProps) => {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const handleInputFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <Pressable onPress={handleInputFocus}>
      <Box>
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
      </Box>
    </Pressable>
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
