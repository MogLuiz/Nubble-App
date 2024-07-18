import {User} from '@domain/user/userTypes';
import {userApi} from '@domain/user/userApi';
import {userAdapter} from '@domain/user/userAdapter';

const show = async (id: number): Promise<User> => {
  const userData = await userApi.Show(id);

  return userAdapter.toUser(userData);
};

export const userService = {
  show,
};
