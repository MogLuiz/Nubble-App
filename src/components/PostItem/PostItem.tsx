import React from 'react';

import {IPost} from '@domain/Post';

import {Box} from '@components/Box';
import {PostImage} from './parts/PostImage';
import {PostHeader} from './parts/PostHeader';
import {PostActions} from './parts/PostActions';

interface IPostItemProps {
  post: IPost;
}
export const PostItem = ({
  post: {author, imageURL, commentCount, favoriteCount, reactionCount},
}: IPostItemProps) => (
  <Box paddingHorizontal="s24" marginBottom="s24">
    <PostHeader author={author} />
    <PostImage imageURL={imageURL} />
    <PostActions
      commentCount={commentCount}
      favoriteCount={favoriteCount}
      reactionCount={reactionCount}
    />
  </Box>
);
