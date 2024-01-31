import React from 'react';
import {Text as RNText, TextProps} from 'react-native';

export const Text = ({children, ...rest}: TextProps): React.JSX.Element => (
  <RNText {...rest}>{children}</RNText>
);
