import React from 'react';

import {useAppSafeArea} from '@hooks/useAppSafeArea';

import {Icon} from '@components/Icon';
import {Box, BoxProps} from '@components/Box';

export const HomeHeader = () => {
  const {topSpacing} = useAppSafeArea();

  return (
    <Box {...$wrapper} style={{paddingTop: topSpacing}}>
      <Box backgroundColor="carrotSecondary" height={16} width={70} />
      <Box flexDirection="row" gap="s24">
        <Box>
          <Icon variant="search" />
        </Box>
        <Box>
          <Icon variant="bell" />
        </Box>
        <Icon variant="comment" />
      </Box>
    </Box>
  );
};

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 's24',
  paddingHorizontal: 's24',
};
