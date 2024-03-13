import React from 'react';

import {IPost} from '@domain/Post';

import {Box} from '@components/Box';
import {PostImage} from './parts/PostImage';
import {PostHeader} from './parts/PostHeader';

interface IPostItemProps {
  post: IPost;
}
export const PostItem = ({post: {author, imageURL}}: IPostItemProps) => (
  <Box marginBottom="s24">
    <PostHeader author={author} />
    <PostImage imageURL={imageURL} />
  </Box>
);
