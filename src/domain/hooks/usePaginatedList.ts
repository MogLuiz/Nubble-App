import { useEffect, useState } from 'react';

import { PaginatedResponseData } from '@types';

export interface UsePaginatedListResponse<T> {
  postList: T[];
  error: boolean | null;
  loading: boolean;
  fetchNextPage: () => void;
  refresh: () => Promise<void>;
}

export const usePaginatedList = <T>(
  listData: (page: number) => Promise<PaginatedResponseData<T>>
): UsePaginatedListResponse<T> => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [postList, setPostList] = useState<T[]>([]);
  const [error, setError] = useState<boolean | null>(null);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const { data, meta } = await listData(1);
      setPostList(data);
      if (meta.hasNextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loading || !hasNextPage) return

    try {
      setLoading(true);
      const { data, meta } = await listData(page);
      setPostList(prev => [...prev, ...data]);
      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }
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
