import { apiAdapter } from '@api';

import { PostComment } from '@domain/PostComment/postCommentTypes';
import { postCommentApi } from '@domain/PostComment/postCommentApi';
import { postCommentAdapter } from '@domain/PostComment/postCommentAdapter';

import { PaginatedResponseData } from '@types';

const list = async (post_id: number, page: number): Promise<PaginatedResponseData<PostComment>> => {
  const postPageAPI = await postCommentApi.list(post_id, { page, per_page: 10 })

  return {
    data: postPageAPI.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta)
  }
};

export const postService = {
  list
};
