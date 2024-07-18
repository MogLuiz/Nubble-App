import {UserAPI} from '@domain/user/userTypes';
import {api} from '@api';

const Show = async (id: number): Promise<UserAPI> => {
  const {data} = await api.get<UserAPI>(`/user/${id}`);

  return data;
};

export const userApi = {
  Show,
};
