import React from 'react';
import {ScrollView, KeyboardAvoidingView, Platform} from 'react-native';

import {Box} from '@components/Box';
import {Icon} from '@components/Icon';
import {Text} from '@components/Text';

import {useAppSafeArea} from '@hooks/useAppSafeArea';

interface ILoginScreenProps {
  children?: React.ReactNode;
  canGoBack?: boolean;
}

export const Screen = ({children, canGoBack = false}: ILoginScreenProps) => {
  const {topSpacing: paddingTop} = useAppSafeArea();

  return (
    <KeyboardAvoidingView behavior={Platform.select({ios: 'padding'})}>
      <ScrollView>
        <Box paddingHorizontal="s24" style={{paddingTop}}>
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
