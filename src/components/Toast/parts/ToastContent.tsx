import React from 'react';
import {Dimensions} from 'react-native';

import {$shadowProps} from '@theme';

import {Icon, IIconProps} from '@components/Icon';
import {Text} from '@components/Text';
import {Box, BoxProps} from '@components/Box';

import {Toast, ToastPosition, ToastType} from '@services/toast/toastTypes';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

type ToastContentProps = {
  toast: Toast;
};

export const ToastContent = ({toast}: ToastContentProps) => {
  const toastType: ToastType = toast?.type || 'success';
  const position: ToastPosition = toast?.position || 'top';

  return (
    <Box {...$boxStyle} style={[{[position]: 100}, $shadowProps]}>
      <Icon {...dictionary[toastType]} />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
};

const dictionary: Record<ToastType, IIconProps> = {
  success: {variant: 'checkRoundIcon', color: 'success'},
  error: {variant: 'errorRoundIcon', color: 'error'},
};

const $boxStyle: BoxProps = {
  backgroundColor: 'background',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};
