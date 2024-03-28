import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Screen} from '@components/Screen';
import { PostCommentItem } from './parts/PostCommentItem';

import { PostComment } from '@/domain/PostComment';
import {usePostCommentList} from '@domain/PostComment/useCases/usePostCommentList';

import {AppScreenParams} from '@types';

export const PostCommentScreen = ({
  route,
}: AppScreenParams<'PostCommentScreen'>) => {
  const {postId} = route.params;
  const {data} = usePostCommentList(postId);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen title="Comentários" canGoBack>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
    </Screen>
  );
};
