import {IPost} from '.';
import {postListMock} from './postMock';

const list = async (): Promise<IPost[]> => {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Ng.-3Jn5LvR3Tg22Tik13GNGynNQgtkFlOOAvBt2kHqooq2kNyyy73Qv0l_WZsa',
    },
  });

  let data = await response.json();
  console.log('FETCH DATA:', data);

  return postListMock;
};

export const postApi = {
  list,
};
