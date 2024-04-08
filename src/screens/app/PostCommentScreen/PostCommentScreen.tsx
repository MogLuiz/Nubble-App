import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useAppSafeArea} from '@hooks/useAppSafeArea';

import {Box} from '@components/Box';
import {Screen} from '@components/Screen';
import {TextMessage} from '@components/TextMessage';
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

  const [comment, setComment] = useState('');

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

        <TextMessage
          onPressSend={() => {}}
          onChangeText={setComment}
          value={comment}
          placeholder="Adicione um comentário"
        />
      </Box>
    </Screen>
  );
};
