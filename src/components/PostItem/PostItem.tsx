import React from 'react';

import {Post} from '@domain/Post';

import {Box} from '@components/Box';
import {PostImage} from './parts/PostImage';
import {PostHeader} from './parts/PostHeader';
import {PostActions} from './parts/PostActions';
import {PostBottom} from './parts/PostBottom';

interface IPostItemProps {
  post: Post;
}
export const PostItem = ({
  post: {author, imageURL, commentCount, favoriteCount, reactionCount, text},
}: IPostItemProps) => (
  <Box paddingHorizontal="s24" marginBottom="s24">
    <PostHeader author={author} />
    <PostImage imageURL={imageURL} />
    <PostActions
      commentCount={commentCount}
      favoriteCount={favoriteCount}
      reactionCount={reactionCount}
    />
    <PostBottom author={author} text={text} commentCount={commentCount} />
  </Box>
);
