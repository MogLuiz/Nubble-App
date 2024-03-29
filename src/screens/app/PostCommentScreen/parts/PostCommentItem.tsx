import React from 'react';

import {Box} from '@components/Box';
import {Text} from '@components/Text';
import { ProfileAvatar } from '@components/ProfileAvatar';

import { PostComment } from '@/domain/PostComment';

interface PostCommentItemProps {
  postComment: PostComment;
}
export const PostCommentItem = ({postComment}: PostCommentItemProps) => (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={postComment.author.profileURL} />
      <Box ml="s12">
        <Text preset="paragraphSmall" bold>
          {postComment.author.userName}
        </Text>
        <Text preset="paragraphSmall" color="gray1">
          {postComment.message}
        </Text>
      </Box>
    </Box>
  )
