import { PostCommentAPI } from '@domain/PostComment/postCommentTypes';
import { api, PaginatedResponseAPI, PaginationParams } from '@api';

const list = async (post_id: number, pagination_params?: PaginationParams) => {
  const { data } = await api.get<PaginatedResponseAPI<PostCommentAPI>>('user/post_comment', {
    params: {
      post_id,
      ...pagination_params
    }
  });

  return data;
};

export const postCommentApi = {
  list
};
