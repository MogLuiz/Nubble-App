import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {postService, IPost} from '@domain/Post';

import {Screen} from '@components/Screen';
import {PostItem} from '@components/PostItem';

import {AppTabScreenParams} from '@types';

export const HomeScreen = ({navigation}: AppTabScreenParams<'HomeScreen'>) => {
  const [postList, setPostList] = useState<IPost[]>([]);

  useEffect(() => {
    postService.list().then(posts => setPostList(posts));
  }, []);

  const renderPostItem = ({item}: ListRenderItemInfo<IPost>) => (
    <PostItem post={item} />
  );

  return (
    <Screen style={$screen}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderPostItem}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
};
