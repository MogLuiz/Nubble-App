import React from "react";

import {useNavigation} from '@react-navigation/native';

import {Box} from '@components/Box';
import {Icon} from '@components/Icon';
import {Text} from '@components/Text';
import { ILoginScreenProps } from "../Screen";
import {TouchableOpacityBox} from '@components/TouchableOpacityBox';

type ScreenHeaderProps = Pick<ILoginScreenProps, 'title'>;

export const ScreenHeader = ({title}: ScreenHeaderProps) => {
  const navigation = useNavigation();
  const ICON_SIZE = 20;

  return (
      <Box
        flexDirection="row"
        mb="s24"
        alignItems="center"
        justifyContent="space-between">
        <TouchableOpacityBox
          onPress={navigation.goBack}
          flexDirection="row"
          alignItems="center"
          gap="s8">
          <Icon variant="arrowLeft" color="primary" size={ICON_SIZE}/>
          {!title && (
            <Text preset="paragraphMedium" semiBold>
              Voltar
            </Text>
            )
          }
        </TouchableOpacityBox>
        
        {title && (
          <>
            <Text preset="headingSmall" semiBold>
              {title}
            </Text>
            <Box width={ICON_SIZE}/>
          </>
        )}
      </Box>
  )
}