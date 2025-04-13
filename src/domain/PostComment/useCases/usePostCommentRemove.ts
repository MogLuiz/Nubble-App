import { MutationOptions } from '@infra/hooks/useMutation';

import { postCommentService } from '@domain/PostComment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '@infra/types';

export const usePostCommentRemove = (post_id: number, options?: MutationOptions<string>) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation<string, unknown, { postCommentId: number }>({
    mutationFn: ({ postCommentId }) => postCommentService.remove(postCommentId),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QueryKeys.PostCommentList, post_id]);
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'Erro ao deletar comentário');
      }
    },
  });

  return {
    removePostComment: mutate,
    isLoading,
    isError,
  }
};
