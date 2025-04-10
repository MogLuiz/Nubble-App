import { userService } from '../userService';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@infra/types';

export const useShowUser = (id: number) => {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: [QueryKeys.useShowUserById, id],
    queryFn: () => userService.show(id),
    staleTime: 1000 * 30,
  });

  return { user: data, isLoading, isError, refetch, isFetching };
};
