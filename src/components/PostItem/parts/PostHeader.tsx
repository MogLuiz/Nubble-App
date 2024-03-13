import React from 'react';
import {Image} from 'react-native';

import {IPost} from '@domain/Post';

import {Box} from '@components/Box';
import {Text} from '@components/Text';

type PostHeaderProps = Pick<IPost, 'author'>;

export const PostHeader = ({author}: PostHeaderProps) => (
  <Box flexDirection="row" alignItems="center" mb="s16">
    <Image
      source={{uri: author.profileURL}}
      style={{width: 32, height: 32, borderRadius: 14}}
    />
    <Text ml="s12" semiBold preset="paragraphMedium">
      {author.userName}
    </Text>
  </Box>
);
