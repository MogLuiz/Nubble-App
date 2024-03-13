import {IPost, postApi} from '.';

const list = async (): Promise<IPost[]> => {
  const postList = await postApi.list();
  return postList;
};

export const postService = {
  list,
};
