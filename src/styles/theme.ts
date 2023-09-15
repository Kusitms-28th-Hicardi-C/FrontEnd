import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#FFFFFF',
  black: '#000000',

  blue1: '#0194FF',
  blue2: '#20C5FF',
  blue3: '#4FD1FF',
  blue4: '#D3EFFF',
  blue5: '#F0F5FF',

  gray1: '#515A68',
  gray2: '#F2F4F6',
  gray3: '#666',
  gray4: '#999',
  gray5: '#868686',
  gray6: '#CCCCCC',
  gray7: '#f2f2f2',
  gray8: '#333',

  box1: '#F8F9FB',
  box2: '#F2F4F6',
  box3: '#D3EFFF',
  box4: '#F4F5F8',
  box5: '#F9FCFF',
  box6: '#DEE6ED',

  process1: '#0194FF',
  process2: '#49B3FF',
  process3: '#90D1FF',
  process4: '#BDE4FF',
} as const;

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
