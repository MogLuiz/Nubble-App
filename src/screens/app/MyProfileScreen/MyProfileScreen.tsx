import React from 'react';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';
import {ActivityIndicator} from '@components/ActivityIndicator';

import {AppScreenParams} from '@types';
import {useShowUser} from '@domain/user/useCases/useShowUser';
import {Box} from '@components/Box';
import {ProfileAvatar} from '@components/ProfileAvatar';
import {RefreshControl, ScrollView} from 'react-native';

export const MyProfileScreen = ({route}: AppScreenParams<'ProfileScreen'>) => {
  const userId = route.params?.userId;

  const {isError, isLoading, user, isFetching, refetch} = useShowUser(userId);

  return (
    <Screen canGoBack flex={1}>
      {isLoading && <ActivityIndicator />}
      {isError && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <ScrollView
          style={{flex: 1}}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }>
          <Box alignItems="center" flex={1}>
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
        </ScrollView>
      )}
    </Screen>
  );
};
