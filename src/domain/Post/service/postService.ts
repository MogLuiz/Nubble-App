import { apiAdapter } from '@api';

import { Post } from '@domain/Post/types';
import { postApi } from '@domain/Post/api';
import { postAdapter } from '@domain/Post/adapters';

import { PaginatedResponseData } from '@types';

type PostListServiceResponse = Promise<PaginatedResponseData<Post>>

const list = async (page: number): PostListServiceResponse => {
  const postPageAPI = await postApi.list({ page, per_page: 10 });

  return {
    data: postPageAPI.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta)
  }
};

export const postService = {
  list
};
