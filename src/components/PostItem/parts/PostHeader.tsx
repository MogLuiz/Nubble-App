import React from 'react';

import {Post} from '@domain/Post';

import {Box} from '@components/Box';
import {Text} from '@components/Text';
import { ProfileAvatar } from '@components/ProfileAvatar';

type PostHeaderProps = Pick<Post, 'author'>;

export const PostHeader = ({
  author: {profileURL, userName},
}: PostHeaderProps) => (
  <Box flexDirection="row" alignItems="center" mb="s16">
    <ProfileAvatar imageURL={profileURL} />
    <Text ml="s12" semiBold preset="paragraphMedium">
      {userName}
    </Text>
  </Box>
);
