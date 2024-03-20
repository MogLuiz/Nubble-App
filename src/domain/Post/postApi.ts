import { PostAPI } from '.';
import { api, PaginatedResponseAPI } from '@api';

const list = async () => {
  await new Promise(resolve => setTimeout(() => resolve(''), 2000));
  const { data } = await api.get<PaginatedResponseAPI<PostAPI>>('/user/post');

  return data;
};

export const postApi = {
  list
};
