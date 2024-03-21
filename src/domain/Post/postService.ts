import { Post } from '.';
import { postApi } from './postApi';
import { postAdapter } from './postAdapter';

const list = async (page: number): Promise<Post[]> => {
  const postPageAPI = await postApi.list({ page, per_page: 10 });

  return postPageAPI.data.map(postAdapter.toPost);
};

export const postService = {
  list
};
