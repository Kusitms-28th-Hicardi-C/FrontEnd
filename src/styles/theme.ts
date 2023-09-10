import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#FFFFFF',
  blue1: '#0194FF',
  blue2: '#20C5FF',
  blue3: '#4FD1FF',

  gray1: '#000',
  gray2: '#333',
  gray3: '#666',
  gray4: '#999',
} as const;

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
