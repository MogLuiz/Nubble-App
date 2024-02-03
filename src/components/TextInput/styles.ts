import {TextStyle} from 'react-native';

import {BoxProps} from '@components/Box';
import {$fontFamily, $fontSizes} from '@components/Text/utils';

export const textInput: TextStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  flexGrow: 1,
  flexShrink: 1,
  ...$fontSizes.paragraphMedium,
};

export const textInputContainer = (hasError?: string): BoxProps => ({
  flexDirection: 'row',
  borderWidth: hasError ? 2 : 1,
  borderColor: hasError ? 'error' : 'gray4',
  padding: 's16',
  borderRadius: 's12',
});
