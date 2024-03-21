import React from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {Post} from '@domain/Post';
import { usePostList } from '@domain/Post/useCases/usePostList';

import {Screen} from '@components/Screen';
import {PostItem} from '@components/PostItem';
import {HomeHeader} from './parts/HomeHeader';
import {HomeEmpty} from './components/HomeEmpty'

import {AppTabScreenParams} from '@types';

export const HomeScreen = ({navigation}: AppTabScreenParams<'HomeScreen'>) => {
  const {error, loading, postList, refetch, fetchNextPage} = usePostList()

  const renderPostItem = ({item}: ListRenderItemInfo<Post>) => (
    <PostItem post={item} />
  );

  return (
    <Screen style={$screen}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderPostItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HomeHeader />}
        contentContainerStyle={{flex: postList.length ? undefined : 1 }}
        ListEmptyComponent={<HomeEmpty loading={loading} error={error} refetch={refetch} />}
      />
    </Screen>
  );
};

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
  flex: 1,
};
