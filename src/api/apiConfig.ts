import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.cpKjz_h59O9MNKd1rBwdi1vUbjy7DrBSps6KiFdpxgd9dOGACETQb84pXm1c'
  },
});

