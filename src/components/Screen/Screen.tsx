import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {Box} from '@components/Box';
import {Icon} from '@components/Icon';
import {Text} from '@components/Text';
import {Container} from './parts/Container';

import {useAppTheme} from '@hooks/useAppTheme';
import {useAppSafeArea} from '@hooks/useAppSafeArea';

interface ILoginScreenProps {
  children?: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export const Screen = ({
  children,
  canGoBack = false,
  scrollable = false,
}: ILoginScreenProps) => {
  const {colors} = useAppTheme();
  const {topSpacing, bottomSpacing} = useAppSafeArea();

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ios: 'padding'})}
      style={{flex: 1}}>
      <Container scrollable={scrollable} backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={{paddingTop: topSpacing, paddingBottom: bottomSpacing}}>
          {canGoBack && (
            <Box mb="s24" flexDirection="row" alignItems="center" gap="s8">
              <Icon variant="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold>
                Voltar
              </Text>
            </Box>
          )}

          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
};
