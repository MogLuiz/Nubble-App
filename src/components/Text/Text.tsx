import React from 'react';
import {TextVariants} from './types';
import {$fontSizes, getFontFamily} from './utils';
import {createText} from '@shopify/restyle';
import {Theme} from '../../theme';

const RestyleText = createText<Theme>();

export interface ITextProps extends React.ComponentProps<typeof RestyleText> {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export const Text = ({
  children,
  preset = 'paragraphMedium',
  bold,
  italic,
  semiBold,
  style,
  ...rest
}: ITextProps): React.JSX.Element => {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold);

  return (
    <RestyleText
      color="backgroundContrast"
      {...rest}
      style={[$fontSizes[preset], style, {fontFamily}]}>
      {children}
    </RestyleText>
  );
};
