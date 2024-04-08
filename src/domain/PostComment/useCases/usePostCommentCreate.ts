import {useState} from 'react';

import {postCommentService} from '@domain/PostComment';

export const usePostCommentCreate = (post_id: number) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  const createPostComment = async (comment: string) => {
    try {
      setLoading(true);
      setError(null);
      await postCommentService.create(post_id, comment);
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
