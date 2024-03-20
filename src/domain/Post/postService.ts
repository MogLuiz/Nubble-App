import { Post } from '.';
import { postApi } from './postApi';
import { postAdapter } from './postAdapter';

const list = async (): Promise<Post[]> => {
  const postPageAPI = await postApi.list();

  return postPageAPI.data.map(postAdapter.toPost);
};

export const postService = {
  list,
};
