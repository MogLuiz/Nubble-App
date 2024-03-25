import { usePaginatedList } from '@domain/hooks/usePaginatedList';
import { postCommentService } from '@domain/PostComment';

export const usePostCommentList = (post_id: number) => {
  const listPostComment = (page: number) => {
    return postCommentService.list(post_id, page)
  }

  return usePaginatedList(listPostComment)
}
