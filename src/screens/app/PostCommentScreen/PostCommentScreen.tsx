import React from 'react';

import {Box} from '@components/Box';
import {Text} from '@components/Text';
import {Screen} from '@components/Screen';

import {AppScreenParams} from '@types';


export const PostCommentScreen = ({route}: AppScreenParams<'PostCommentScreen'>) => {
  const {postId} = route.params;

  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <Text>Tela de comentários</Text>
      </Box>
    </Screen>
  );
}