import React from 'react';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {ActivityIndicator} from '@components/ActivityIndicator';

import {AppScreenParams} from '@types';
import {useShowUser} from '@domain/user/useCases/useShowUser';
import {Box} from '@components/Box';
import {ProfileAvatar} from '@components/ProfileAvatar';

export const MyProfileScreen = ({route}: AppScreenParams<'ProfileScreen'>) => {
  const userId = route.params?.userId;

  const {isError, isLoading, user} = useShowUser(userId);

  return (
    <Screen canGoBack>
      {isLoading && <ActivityIndicator />}
      {isError && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <Box alignItems="center">
          <ProfileAvatar
            imageURL={user.profileUrl}
            size={64}
            borderRadius={24}
          />
          <Text preset="headingMedium" bold>
            {user.fullName}
          </Text>
          <Text>@{user.username}</Text>
        </Box>
      )}
    </Screen>
  );
};
