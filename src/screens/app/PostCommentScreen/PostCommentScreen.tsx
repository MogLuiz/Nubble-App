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
import {usePostCommentList} from '@domain/PostComment/useCases/usePostCommentList';

import {AppScreenParams} from '@types';

export const PostCommentScreen = ({
  route,
}: AppScreenParams<'PostCommentScreen'>) => {
  const {postId} = route.params;
  const {bottomSpacing} = useAppSafeArea();

  const {data, fetchNextPage, hasNextPage} = usePostCommentList(postId);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
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
