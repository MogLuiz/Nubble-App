import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useAppSafeArea} from '@hooks/useAppSafeArea';

import {Screen} from '@components/Screen';
import {PostCommentBottom, PostCommentItem} from './parts';

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
    <Screen title="Comentários" canGoBack>
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
    </Screen>
  );
};
