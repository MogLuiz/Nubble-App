import { PostCommentAPI } from '@domain/PostComment/postCommentTypes';
import { api, PaginatedResponseAPI, PaginationParams } from '@api';

const list = async (post_id: number, pagination_params?: PaginationParams) => {
  const { data } = await api.get<PaginatedResponseAPI<PostCommentAPI>>(
    'user/post_comment',
    {
      params: {
        post_id,
        ...pagination_params,
      },
    },
  );

  return data;
};

const create = async (post_id: number, comment: string) => {
  const { data } = await api.post<PostCommentAPI>('user/post_comment', {
    post_id,
    comment,
  });

  return data;
};

export const postCommentApi = {
  list,
  create,
};
