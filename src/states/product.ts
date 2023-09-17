import { atom } from 'recoil';

export const productCategoryState = atom({
  key: 'productCategoryState',
  default: '전체',
});

export const productImageState = atom({
  key: 'productImageState',
  default: '',
});

export const productTitleState = atom({
  key: 'productTitleState',
  default: '',
});

export const productPriceState = atom({
  key: 'productPriceState',
  default: '',
});
