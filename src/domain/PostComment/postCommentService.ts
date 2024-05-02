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

/**
 * @description user can delete the comment if it is the post author or comment author
 *
 * @param postComment comment to be deleted
 * @param userId the current session user id
 * @param postAuthorId the id of the post author
 */
const isAllowToDelete = (
  postComment: PostComment,
  userId: number,
  postAuthorId: number,
): boolean => {
  if (postComment.author.id === userId) {
    return true;
  }

  if (postAuthorId === userId) {
    return true;
  }

  return false;
};

export const postCommentService = {
  list,
  create,
  remove,
  isAllowToDelete,
};
