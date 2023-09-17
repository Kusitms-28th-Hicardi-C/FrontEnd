import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const idState = atom({
  key: 'idState',
  default: 'id',
  effects_UNSTABLE: [persistAtom],
});

export const nameState = atom({
  key: 'nameState',
  default: '홍길동',
  effects_UNSTABLE: [persistAtom],
});

export const emailState = atom({
  key: 'emailState',
  default: 'test',
  effects_UNSTABLE: [persistAtom],
});
