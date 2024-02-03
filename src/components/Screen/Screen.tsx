import React from 'react';

import {Box} from '@components/Box';

interface ILoginScreenProps {
  children?: React.ReactNode;
}

export const Screen = ({children}: ILoginScreenProps) => (
  <Box paddingHorizontal="s24">{children}</Box>
);
