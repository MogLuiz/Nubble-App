import React from 'react';
import {Text} from '../Text';
import {ActivityIndicator} from 'react-native';
import {
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '../TouchableOpacityBox';
import {buttonPresets} from './utils';

export type ButtonPreset = 'primary' | 'outline';

interface IButtonProps extends TouchableOpacityBoxProps {
  title: string;
  isLoading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export const Button = ({
  title,
  isLoading,
  disabled,
  preset = 'primary',
  ...rest
}: IButtonProps) => {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      disabled={disabled || isLoading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
};
