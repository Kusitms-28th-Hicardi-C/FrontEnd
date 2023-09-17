import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const productCategoryState = atom({
  key: 'productCategoryState',
  default: '전체',
});

export const productImageState = atom({
  key: 'productImageState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const productTitleState = atom({
  key: 'productTitleState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const productPriceState = atom({
  key: 'productPriceState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
