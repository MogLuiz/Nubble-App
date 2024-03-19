import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {postService, Post} from '@domain/Post';

import {Screen} from '@components/Screen';
import {PostItem} from '@components/PostItem';
import {HomeHeader} from './parts/HomeHeader';

import {AppTabScreenParams} from '@types';

export const HomeScreen = ({navigation}: AppTabScreenParams<'HomeScreen'>) => {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.list().then(posts => setPostList(posts));
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
      />
    </Screen>
  );
};

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
};
