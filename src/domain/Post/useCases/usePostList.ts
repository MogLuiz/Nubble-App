import { QueryKeys } from '@infra/types';
import { Post, postService } from '@domain/Post';
import { usePaginatedList } from '@infra/hooks/usePaginatedList';

export const usePostList = () => {
  return usePaginatedList<Post>([QueryKeys.PostList], postService.list);
};
