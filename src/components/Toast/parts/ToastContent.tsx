import React from 'react';
import {Dimensions} from 'react-native';

import {$shadowProps} from '@theme';

import {Icon} from '@components/Icon';
import {Text} from '@components/Text';
import {Box, BoxProps} from '@components/Box';

import {Toast} from '@services/toast/toastTypes';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

type ToastContentProps = {
  toast: Toast;
};

export const ToastContent = ({toast}: ToastContentProps) => {
  const position: Required<Toast>['position'] = toast?.position || 'top';

  return (
    <Box {...$boxStyle} style={[{[position]: 100}, $shadowProps]}>
      <Icon color="success" variant="checkRoundIcon" />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
};

const $boxStyle: BoxProps = {
  position: 'absolute',
  backgroundColor: 'background',
  alignSelf: 'center',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};
