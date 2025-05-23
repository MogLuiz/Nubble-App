import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useAppSafeArea} from '@hooks/useAppSafeArea';

import {Box} from '@components/Box';
import {Screen} from '@components/Screen';
import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './parts';

import {PostComment} from '@/domain/PostComment';
import {useUser} from '@domain/Auth/hooks/useUser';
import {usePostCommentList} from '@domain/PostComment/useCases/usePostCommentList';

import {AppScreenParams} from '@types';

export const PostCommentScreen = ({
  route,
}: AppScreenParams<'PostCommentScreen'>) => {
  const {postId, postAuthorId} = route.params;

  const {id} = useUser();
  const {bottomSpacing} = useAppSafeArea();

  const {data, fetchNextPage, hasNextPage, refresh} =
    usePostCommentList(postId);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postId={postId}
        postComment={item}
        postAuthorId={postAuthorId}
        userId={id}
      />
    );
  }

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          data={data}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: bottomSpacing}}
          ListFooterComponent={
            <PostCommentBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
          showsVerticalScrollIndicator={false}
        />

        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  );
};
