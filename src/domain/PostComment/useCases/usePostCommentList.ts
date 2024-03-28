import {postCommentService} from '@domain/PostComment';
import {usePaginatedList} from '@domain/hooks/usePaginatedList';

export const usePostCommentList = (post_id: number) => {
  const listPostComment = (page: number) => {
    return postCommentService.list(post_id, page);
  };

  return usePaginatedList(listPostComment);
};
