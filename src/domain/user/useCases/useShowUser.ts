import {userService} from '../userService';
import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@infra/types';

export const useShowUser = (id: number) => {
  const {data, isLoading, isError} = useQuery({
    queryKey: [QueryKeys.useShowUserById],
    queryFn: () => userService.show(id),
  });

  return {user: data, isLoading, isError};
};
