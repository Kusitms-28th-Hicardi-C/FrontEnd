import { atom } from 'recoil';

export const idState = atom({
  key: 'idState',
  default: 'id',
});

export const nameState = atom({
  key: 'nameState',
  default: '홍길동',
});

export const emailState = atom({
  key: 'emailState',
  default: 'test',
});
