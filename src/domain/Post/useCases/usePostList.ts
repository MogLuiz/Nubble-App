import { Post, postService } from '@domain/Post';
import { usePaginatedList } from '@domain/hooks/usePaginatedList';

export const usePostList = () => {
  return usePaginatedList<Post>(postService.list)
}

