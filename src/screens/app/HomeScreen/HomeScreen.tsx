import React, {useEffect, useState} from 'react';

import {postService, IPost} from '@domain/Post';

import {Text} from '@components/Text';
import {Screen} from '@components/Screen';

import {AppTabScreenParams} from '@types';

export const HomeScreen = ({navigation}: AppTabScreenParams<'HomeScreen'>) => {
  const [postsList, setPostsList] = useState<IPost[]>([]);

  useEffect(() => {
    postService.list().then(posts => setPostsList(posts));
  }, []);

  console.log({postsList});

  return (
    <Screen>
      {postsList.map(post => (
        <Text key={post.id}>{post.text}</Text>
      ))}
    </Screen>
  );
};
