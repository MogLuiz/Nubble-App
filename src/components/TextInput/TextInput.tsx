import React, {useRef} from 'react';
import {
  Pressable,
  TextInputProps,
  TextInput as RNTextInput,
} from 'react-native';

import {useAppTheme} from '@hooks/useAppTheme';

import {Text} from '@components/Text';
import {Box, BoxProps} from '@components/Box';

import * as style from './styles';

export interface ITextInputProps extends TextInputProps {
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
        <Box {...style.textInputContainer(errorMessage)}>
          <RNTextInput
            ref={inputRef}
            autoCapitalize="none"
            placeholderTextColor={colors.gray2}
            style={style.textInput}
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
