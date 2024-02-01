import React from 'react';

import {buttonPresets} from './utils';

import {Text} from '@components/Text';
import {
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components/TouchableOpacityBox';
import {ActivityIndicator} from '@components/ActivityIndicator';

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
