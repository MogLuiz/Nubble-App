import { useMutation } from '@tanstack/react-query';

import { authService } from '../authService';
import { AuthCredentials } from '../authTypes';
import { MutationOptions } from '@/infra/hooks/useMutation';

interface Variables {
  email: string;
  password: string;
}

export function useAuthSignIn(options?: MutationOptions<AuthCredentials>) {
  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({ email, password }) => authService.signIn(email, password),
    retry: false,
    onSuccess: credentials => authService.updateToken(credentials.token),
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  return {
    isLoading: mutation.isLoading,
    signIn: (variables: Variables) => mutation.mutate(variables),
  };
}