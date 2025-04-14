import { User, UserAPI } from '@domain/user/userTypes';

const toUser = (userAPI: UserAPI): User => ({
  id: userAPI.id,
  firstName: userAPI.first_name,
  lastName: userAPI.last_name,
  username: userAPI.username,
  email: userAPI.email,
  profileUrl: userAPI.profile_url,
  fullName: userAPI.full_name,
  isOnline: userAPI.is_online,
});

export const userAdapter = { toUser };
