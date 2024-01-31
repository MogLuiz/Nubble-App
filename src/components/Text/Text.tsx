import React from 'react';
import {createText} from '@shopify/restyle';

import {$fontSizes, getFontFamily} from './utils';

import {Theme} from '@theme';

import {TextVariants} from './types';

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
