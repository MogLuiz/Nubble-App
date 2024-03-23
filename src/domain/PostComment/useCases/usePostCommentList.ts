import { usePaginatedList } from '@domain/hooks/usePaginatedList';
import { PostComment, postCommentService } from '@domain/PostComment';

export const usePostCommentList = (post_id: number) => {
  const listPostComment = (page: number) => postCommentService.list(post_id, page)

  return usePaginatedList<PostComment>(listPostComment)
}
