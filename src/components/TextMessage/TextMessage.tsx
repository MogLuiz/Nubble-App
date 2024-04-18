import React, {useRef} from 'react';
import {
  Pressable,
  TextInputProps,
  TextInput as RNTextInput,
} from 'react-native';

import {useAppTheme} from '@hooks/useAppTheme';

import {Box} from '@components/Box';
import {Text} from '@components/Text';
import {textInput as textInputStyle} from '@components/TextInput/styles';

interface TextMessageProps extends TextInputProps {
  onPressSend: (message: string) => void;
}

export const TextMessage = ({
  onPressSend,
  value,
  ...rest
}: TextMessageProps) => {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const handleInputFocus = () => {
    inputRef.current?.focus();
  };

  const isDisabledToSubmit = !value?.trim().length;

  return (
    <Pressable onPress={handleInputFocus}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="s12">
        <RNTextInput
          ref={inputRef}
          placeholderTextColor={colors.gray1}
          style={[textInputStyle, {color: colors.gray1}]}
          {...rest}
        />

        <Pressable
          disabled={isDisabledToSubmit}
          onPress={() => onPressSend(value ?? '')}>
          <Text color={isDisabledToSubmit ? 'gray2' : 'primary'} bold>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
};
