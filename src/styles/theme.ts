import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#FFFFFF',
  blue1: '#0194FF',
  blue2: '#20C5FF',
  blue3: '#4FD1FF',
  blue4: '#D3EFFF',
  blue5: '#F8F9FB',

  gray1: '#000',
  gray2: '#F2F4F6',
  gray3: '#666',
  gray4: '#999',
  gray5: '#F8F9FB',
} as const;

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
