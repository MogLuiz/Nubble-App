import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {postService, Post} from '@domain/Post';

import {Screen} from '@components/Screen';
import {PostItem} from '@components/PostItem';
import {HomeHeader} from './parts/HomeHeader';
import {HomeEmpty} from './components/HomeEmpty'

import {AppTabScreenParams} from '@types';

export const HomeScreen = ({navigation}: AppTabScreenParams<'HomeScreen'>) => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.list();
      setPostList(list);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);
  

  useEffect(() => {
    fetchData();
  }, []);

  const renderPostItem = ({item}: ListRenderItemInfo<Post>) => (
    <PostItem post={item} />
  );

  return (
    <Screen style={$screen}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderPostItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<HomeEmpty loading={loading} error={error} refetch={fetchData} />}
      />
    </Screen>
  );
};

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
};
