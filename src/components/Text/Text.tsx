import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import {TextVariants} from './types';
import {$fontSizes, getFontFamily} from './utils';

export interface ITextProps extends TextProps {
  variant?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export const Text = ({
  children,
  variant = 'paragraphMedium',
  bold,
  italic,
  semiBold,
  style,
  ...rest
}: ITextProps): React.JSX.Element => {
  const fontFamily = getFontFamily(variant, bold, italic, semiBold);

  return (
    <RNText {...rest} style={[$fontSizes[variant], style, {fontFamily}]}>
      {children}
    </RNText>
  );
};
