import {useMutation, MutationOptions} from '@infra/hooks/useMutation';

import {PostComment, postCommentService} from '@domain/PostComment';

interface UsePostCommentCreateResponse {
  message: string;
}

export const usePostCommentCreate = (
  post_id: number,
  options?: MutationOptions<PostComment>,
) => {
  const {mutate, loading, error} = useMutation<
    UsePostCommentCreateResponse,
    PostComment
  >(({message}) => postCommentService.create(post_id, message), options);

  const createPostComment = async (message: string) => {
    await mutate({message});
  };

  return {
    createPostComment,
    loading,
    error,
  };
};
