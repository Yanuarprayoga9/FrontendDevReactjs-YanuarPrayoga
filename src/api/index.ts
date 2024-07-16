import axios, { AxiosRequestConfig } from 'axios';
import { getAccessToken } from './services';

const createAPI = (useToken = true) => {
  const baseURL = `${import.meta.env.VITE_BACKEND_URL}/api`;

  const headers: AxiosRequestConfig['headers'] = {
    Accept: 'application/json',
  };

  if (useToken) {
    headers.Authorization = `Bearer ${getAccessToken()}`;
  }
  const api = axios.create({
    baseURL,
    headers,
  });

  return api;
};
export const apiWithoutToken = createAPI(false);
export const apiWithToken = createAPI(true);

