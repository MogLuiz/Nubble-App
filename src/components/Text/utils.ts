import {TextStyle} from 'react-native';
import {TextVariants} from './types';

export function getFontFamily(
  variant: TextVariants,
  isBold?: boolean,
  isItalic?: boolean,
  isSemiBold?: boolean,
) {
  const {boldItalic, bold, italic, mediumItalic, medium, regular} = $fontFamily;

  if (['headingLarge', 'headingMedium', 'headingSmall'].includes(variant)) {
    return isItalic ? boldItalic : bold;
  }

  if (isBold && isItalic) {
    return boldItalic;
  }
  if (isBold) {
    return bold;
  }
  if (isItalic) {
    return italic;
  }
  if (isSemiBold && isItalic) {
    return mediumItalic;
  }
  if (isSemiBold) {
    return medium;
  }

  return regular;
}

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};
