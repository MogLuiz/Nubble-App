import {IPost} from '.';
import {postApi} from './postApi';

const list = async (): Promise<IPost[]> => {
  const postList = await postApi.list();
  return postList;
};

export const postService = {
  list,
};
