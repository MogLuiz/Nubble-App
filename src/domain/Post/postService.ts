import {postApi} from './postApi';
import {IPost} from './types';

const list = async (): Promise<IPost[]> => {
  const postList = await postApi.list();
  return postList;
};

export const postService = {
  list,
};
