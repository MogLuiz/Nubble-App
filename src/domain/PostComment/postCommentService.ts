import {apiAdapter} from '@api';

import {PostComment} from '@domain/PostComment/postCommentTypes';
import {postCommentApi} from '@domain/PostComment/postCommentApi';
import {postCommentAdapter} from '@domain/PostComment/postCommentAdapter';

import {PaginatedResponseData} from '@types';

const list = async (
  post_id: number,
  page: number,
): Promise<PaginatedResponseData<PostComment>> => {
  const postCommentPageAPI = await postCommentApi.list(post_id, {
    page,
    per_page: 10,
  });

  return {
    data: postCommentPageAPI.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentPageAPI.meta),
  };
};

const create = async (
  post_id: number,
  comment: string,
): Promise<PostComment> => {
  const postCommentAPI = await postCommentApi.create(post_id, comment);

  return postCommentAdapter.toPostComment(postCommentAPI);
};

const remove = async (postCommentId: number): Promise<string> => {
  const {message} = await postCommentApi.remove(postCommentId);

  return message;
};

export const postCommentService = {
  list,
  create,
  remove,
};
