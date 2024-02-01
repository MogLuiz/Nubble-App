import React from 'react';
import {useTheme} from '@shopify/restyle';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';

import {Theme, ThemeColors} from '@theme';

interface IActivityIndicatorProps
  extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}
export const ActivityIndicator = ({
  color,
  ...rest
}: IActivityIndicatorProps) => {
  const {colors} = useTheme<Theme>();

  return <RNActivityIndicator color={colors[color]} {...rest} />;
};
