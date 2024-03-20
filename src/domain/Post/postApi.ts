import { PostAPI } from '.';
import { api, PaginatedResponseAPI } from '@api';

const list = async () => {
  const { data } = await api.get<PaginatedResponseAPI<PostAPI>>('/user/post');

  return data;
};

export const postApi = {
  list
};
