import React from 'react';
import {useAppTheme} from '@hooks/useAppTheme';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';

import {ThemeColors} from '@theme';

interface IActivityIndicatorProps
  extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}
export const ActivityIndicator = ({
  color,
  ...rest
}: IActivityIndicatorProps) => {
  const {colors} = useAppTheme();

  return <RNActivityIndicator color={colors[color]} {...rest} />;
};
