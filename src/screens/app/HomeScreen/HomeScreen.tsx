import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';
import React, {useEffect, useState} from 'react';

import {postService, IPost} from '@domain/Post';

import {Box} from '@components/Box';
import {Text} from '@components/Text';
import {Screen} from '@components/Screen';

import {AppTabScreenParams} from '@types';

export const HomeScreen = ({navigation}: AppTabScreenParams<'HomeScreen'>) => {
  const [postList, setPostList] = useState<IPost[]>([]);

  useEffect(() => {
    postService.list().then(posts => setPostList(posts));
  }, []);

  const renderItem = ({
    item: {author, imageURL},
  }: ListRenderItemInfo<IPost>) => {
    return (
      <Box marginBottom="s24">
        <Box flexDirection="row">
          <Image
            source={{uri: author.profileURL}}
            style={{width: 32, height: 32}}
          />
          <Text>{author.userName}</Text>
        </Box>
        <Image
          source={{uri: imageURL}}
          resizeMode="cover"
          style={{width: Dimensions.get('screen').width, height: 300}}
        />
      </Box>
    );
  };

  return (
    <Screen>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
};
