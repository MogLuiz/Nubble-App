import {dateUtils} from '@utils/date';
import {PostComment, PostCommentAPI} from './postCommentTypes';

const toPostComment = (postCommentAPI: PostCommentAPI): PostComment => ({
  id: postCommentAPI.id,
  message: postCommentAPI.message,
  createdAt: postCommentAPI.created_at,
  formattedCreatedAt: dateUtils.formatRelative(postCommentAPI.created_at),
  author: {
    id: postCommentAPI.user.id,
    name: postCommentAPI.user.full_name,
    profileURL: postCommentAPI.user.profile_url,
    userName: postCommentAPI.user.username,
  },
});

export const postCommentAdapter = {
  toPostComment,
};
