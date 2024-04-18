import {useState} from 'react';

import {PostComment, postCommentService} from '@domain/PostComment';

interface UsePostCommentCreateOptions {
  onSucess?: (data: PostComment) => void;
}

export const usePostCommentCreate = (
  post_id: number,
  options?: UsePostCommentCreateOptions,
) => {
  const {onSucess} = options || {};
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  const createPostComment = async (comment: string) => {
    try {
      setLoading(true);
      setError(null);
      const postCommentData = await postCommentService.create(post_id, comment);
      onSucess?.(postCommentData);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    createPostComment,
    loading,
    error,
  };
};
