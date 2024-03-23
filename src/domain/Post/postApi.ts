import { PostAPI } from '@domain/Post';
import { api, PaginatedResponseAPI, PaginationParams } from '@api';

const list = async (params?: PaginationParams) => {
  const { data } = await api.get<PaginatedResponseAPI<PostAPI>>('/user/post', { params });

  return data;
};

export const postApi = {
  list
};
