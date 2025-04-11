import { useEffect, useState } from 'react';

import { PaginatedResponseData } from '@types';
import { useInfiniteQuery } from '@tanstack/react-query';

export interface UsePaginatedListResponse<T> {
  data: T[];
  isError: boolean | null;
  isLoading: boolean;
  fetchNextPage: () => void;
  refresh: () => void;
  hasNextPage: boolean;
}

export const usePaginatedList = <T>(
  queryKey: readonly unknown[],
  listData: (page: number) => Promise<PaginatedResponseData<T>>,
): UsePaginatedListResponse<T> => {
  const [fetchedData, setFetchedData] = useState<T[]>([]);

  const { isError, isLoading, refetch, fetchNextPage, hasNextPage, data } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 1 }) => listData(pageParam),
    getNextPageParam: ({ meta }) => meta.hasNextPage ? meta.currentPage + 1 : null,
  })

  useEffect(() => {
    if (data) {
      const newList = data.pages.reduce<T[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);
      setFetchedData(newList);
    }
  }, [data]);

  return {
    data: fetchedData,
    isError,
    isLoading,
    refresh: refetch,
    fetchNextPage,
    hasNextPage: !!hasNextPage,
  };
};
