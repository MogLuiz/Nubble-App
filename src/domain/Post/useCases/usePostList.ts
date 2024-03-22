import { useEffect, useState } from 'react';

import { Post, postService } from '@domain/Post';

interface UsePostListResponse {
  postList: Post[];
  error: boolean | null;
  loading: boolean;
  fetchNextPage: () => void;
  refresh: () => Promise<void>;
}

export const usePostList = (): UsePostListResponse => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState<Post[]>([]);
  const [error, setError] = useState<boolean | null>(null);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.list(1);
      setPostList(list);
      //TODO: validar se tem mais páginas
      setPage(2);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loading) return

    try {
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

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    postList,
    error,
    loading,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
