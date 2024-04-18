import {
  PostCommentAPI,
  PostCommentRemoveAPI,
} from '@domain/PostComment/postCommentTypes';
import {api, PaginatedResponseAPI, PaginationParams} from '@api';

const BASE_URL = 'user/post_comment';

const list = async (post_id: number, pagination_params?: PaginationParams) => {
  const {data} = await api.get<PaginatedResponseAPI<PostCommentAPI>>(BASE_URL, {
    params: {
      post_id,
      ...pagination_params,
    },
  });

  return data;
};

const create = async (post_id: number, comment: string) => {
  const {data} = await api.post<PostCommentAPI>(BASE_URL, {
    post_id,
    message: comment,
  });

  return data;
};

const remove = async (postCommentId: number) => {
  const {data} = await api.delete<PostCommentRemoveAPI>(
    `${BASE_URL}/${postCommentId}`,
  );

  return data;
};

export const postCommentApi = {
  list,
  create,
  remove,
};
