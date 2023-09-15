import axios from 'axios';

const token = localStorage.getItem('accessToken');

export const hicardiAxios = axios.create({
  baseURL: process.env.REACT_APP_MSSAEM_BASE_URL,
  headers: {
    Authorization: token,
  },
});
