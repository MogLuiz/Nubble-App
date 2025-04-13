import { MutationOptions } from '@infra/hooks/useMutation';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PostComment, postCommentService } from '@domain/PostComment';
import { QueryKeys } from '@infra/types';

interface CreateCommentPostVariables {
  message: string;
}

export const usePostCommentCreate = (
  post_id: number,
  options?: MutationOptions<PostComment>,
) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation<PostComment, unknown, CreateCommentPostVariables>({
    mutationFn: ({ message }) => postCommentService.create(post_id, message),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QueryKeys.PostCommentList, post_id]);
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'Erro ao criar comentário');
      }
    },
  })

  const createPostComment = (message: string) => {
    mutate({ message });
  };

  return {
    createPostComment,
    isLoading,
    isError,
  };
};
