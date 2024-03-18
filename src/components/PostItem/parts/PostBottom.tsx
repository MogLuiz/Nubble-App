import React from 'react';

import {IPost} from '@domain/Post';

import {Box} from '@components/Box';
import {Text} from '@components/Text';

type Props = Pick<IPost, 'author' | 'text' | 'commentCount'>;

export const PostBottom = ({author, text, commentCount}: Props) => {
  const commentText = getCommentText(commentCount);

  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text mt="s8" preset="paragraphSmall" bold color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  );
};

function getCommentText(commentCount: number): string | null {
  if (!commentCount) {
    return null;
  }

  return commentCount === 1
    ? 'ver comentário'
    : `ver ${commentCount} comentários`;
}
