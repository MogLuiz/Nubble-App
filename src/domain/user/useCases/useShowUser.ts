import {useCallback, useEffect, useState} from 'react';
import {User} from '../userTypes';
import {userService} from '../userService';

export const useShowUser = (id: number) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  const showUserById = useCallback(async () => {
    try {
      const _user = await userService.show(id);
      setUser(_user);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    showUserById();
  }, [showUserById]);

  return {user, error, loading};
};
