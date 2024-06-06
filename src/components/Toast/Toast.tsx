import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {$shadowProps} from '@theme';
import {useToastActions, useToastData} from '@services/toast/useToast';

import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {Box, BoxProps} from '../Box/Box';

const DEFAULT_DURATION = 2000;
const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  const toast = useToastData();
  const {hideToast} = useToastActions();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [toast]);

  if (!toast) {
    return null;
  }

  return (
    <Box top={100} {...$boxStyle}>
      <Icon color="success" variant="checkRoundIcon" />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

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
  style: {...$shadowProps},
};
