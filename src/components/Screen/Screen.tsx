import React from 'react';

import {Box} from '@components/Box';

import {useAppSafeArea} from '@hooks/useAppSafeArea';

interface ILoginScreenProps {
  children?: React.ReactNode;
}

export const Screen = ({children}: ILoginScreenProps) => {
  const {topSpacing: paddingTop} = useAppSafeArea();

  return (
    <Box paddingHorizontal="s24" style={{paddingTop}}>
      {children}
    </Box>
  );
};
