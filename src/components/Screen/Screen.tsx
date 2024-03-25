import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {Box, BoxProps} from '@components/Box';
import {ScreenContainer, ScreenHeader} from './parts';

import {useAppTheme} from '@hooks/useAppTheme';
import {useAppSafeArea} from '@hooks/useAppSafeArea';

export interface ILoginScreenProps extends BoxProps {
  children?: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export const Screen = ({
  children,
  canGoBack = false,
  scrollable = false,
  title,
  style,
  ...boxProps
}: ILoginScreenProps) => {
  const {colors} = useAppTheme();

  const {topSpacing, bottomSpacing} = useAppSafeArea();

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ios: 'padding'})}
      style={{flex: 1}}>
      <ScreenContainer scrollable={scrollable} backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[
            {paddingTop: topSpacing, paddingBottom: bottomSpacing},
            style,
          ]}
          {...boxProps}>

          {canGoBack && (
            <ScreenHeader title={title}/>
          )}

          {children}
        </Box>
      </ScreenContainer>
    </KeyboardAvoidingView>
  );
};
