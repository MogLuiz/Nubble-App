import {useMutation, MutationOptions} from '@infra/hooks/useMutation';

import {postCommentService} from '@domain/PostComment';

export const usePostCommentRemove = (options?: MutationOptions<string>) => {
  return useMutation<number, string>(postCommentService.remove, options);
};
