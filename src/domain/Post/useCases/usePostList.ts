import { useEffect, useState } from 'react';

import { Post, postService } from '@domain/Post';

interface UsePostListResponse {
  postList: Post[];
  error: boolean | null;
  loading: boolean;
  refetch: () => Promise<void>;
}

export const usePostList = (): UsePostListResponse => {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState<Post[]>([]);
  const [error, setError] = useState<boolean | null>(null);

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.list();
      setPostList(list);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    postList,
    error,
    loading,
    refetch: fetchData,
  };
}
