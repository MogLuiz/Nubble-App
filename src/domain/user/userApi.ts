import {UserAPI} from '@domain/user/userTypes';
import {api} from '@api';

const Show = async (id: string): Promise<UserAPI> => {
  const {data} = await api.get<UserAPI>(`/users/${id}`);

  return data;
};

export const userApi = {
  Show,
};
