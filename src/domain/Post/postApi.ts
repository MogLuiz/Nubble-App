import { PostAPI } from '.';
import { PaginatedResponseAPI } from '@api';

const list = async (): Promise<PaginatedResponseAPI<PostAPI>> => {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Ng.-3Jn5LvR3Tg22Tik13GNGynNQgtkFlOOAvBt2kHqooq2kNyyy73Qv0l_WZsa',
    },
  });

  let data: PaginatedResponseAPI<PostAPI> = await response.json();
  return data;
};

export const postApi = {
  list,
};
