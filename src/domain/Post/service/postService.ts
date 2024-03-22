import { Post } from '@domain/Post/types';
import { postApi } from '@domain/Post/api';
import { postAdapter } from '@domain/Post/adapters';

const list = async (page: number): Promise<Post[]> => {
  const postPageAPI = await postApi.list({ page, per_page: 10 });

  return postPageAPI.data.map(postAdapter.toPost);
};

export const postService = {
  list
};
