import React from 'react';
import {Dimensions} from 'react-native';

import {$shadowProps} from '@theme';

import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {Box, BoxProps} from '../Box/Box';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  return (
    <Box top={100} {...$boxStyle}>
      <Icon color="success" variant="checkRoundIcon" />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        Toast Component Toast Toast Component Toast SADASssdsds sdsdsdsds
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
