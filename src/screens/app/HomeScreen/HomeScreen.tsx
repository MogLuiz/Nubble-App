import React, {useRef} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Post} from '@domain/Post';
import {usePostList} from '@domain/Post/useCases/usePostList';

import {useScrollToTop} from '@react-navigation/native';

import {Screen} from '@components/Screen';
import {PostItem} from '@components/PostItem';
import {HomeHeader} from './parts/HomeHeader';
import {HomeEmpty} from './components/HomeEmpty';

import {AppTabScreenParams} from '@types';

export const HomeScreen = ({navigation}: AppTabScreenParams<'HomeScreen'>) => {
  const {
    isError,
    isLoading,
    data: postList,
    refresh,
    fetchNextPage,
  } = usePostList();

  const flatListRef = useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);

  const renderPostItem = ({item}: ListRenderItemInfo<Post>) => (
    <PostItem post={item} />
  );

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        data={postList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderPostItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HomeHeader />}
        contentContainerStyle={{flex: postList?.length ? undefined : 1}}
        ListEmptyComponent={
          <HomeEmpty loading={isLoading} error={isError} refetch={refresh} />
        }
        refreshing={isLoading}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
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
