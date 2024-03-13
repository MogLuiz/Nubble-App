import {IPost} from '.';
import {postListMock} from './postMock';

const list = (): Promise<IPost[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(postListMock);
    }, 1000);
  });
};

export const postApi = {
  list,
};
