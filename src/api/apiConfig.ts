import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mw.wVL_Ux1skuhFSGb39c-8f3lpJ233tRsmkleQsGwhstPpD9Nj7VHEBaQot3Ox',
  },
});
