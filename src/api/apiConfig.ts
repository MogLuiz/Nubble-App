import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Ng.-3Jn5LvR3Tg22Tik13GNGynNQgtkFlOOAvBt2kHqooq2kNyyy73Qv0l_WZsa'
  },
});