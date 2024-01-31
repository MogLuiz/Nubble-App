import React from 'react';
import {Text} from '../Text';
import {ActivityIndicator} from 'react-native';
import {TouchableOpacityBox} from '../TouchableOpacityBox';

interface IButtonProps
  extends React.ComponentProps<typeof TouchableOpacityBox> {
  title: string;
  isLoading?: boolean;
}

export const Button = ({title, isLoading, ...rest}: IButtonProps) => {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...rest}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold color="primaryContrast">
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
};
