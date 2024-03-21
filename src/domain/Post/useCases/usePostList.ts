import { useEffect, useState } from 'react';

import { Post, postService } from '@domain/Post';

interface UsePostListResponse {
  postList: Post[];
  error: boolean | null;
  loading: boolean;
  fetchNextPage: () => void;
  refetch: () => Promise<void>;
}

export const usePostList = (): UsePostListResponse => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState<Post[]>([]);
  const [error, setError] = useState<boolean | null>(null);

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.list(page);
      setPostList(prev => [...prev, ...list]);
      setPage(prev => prev + 1);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const fetchNextPage = () => {
    if (!loading) {
      fetchData();
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
    fetchNextPage,
  };
}
