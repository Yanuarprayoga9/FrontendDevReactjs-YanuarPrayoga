import axios, { AxiosRequestConfig } from 'axios';
import { getAccessToken } from './services';

/**
 * Membuat instance API dengan atau tanpa token akses
 * @param {boolean} [useToken=true] - Menentukan apakah akan menggunakan token akses atau tidak
 * @returns {import('axios').AxiosInstance} Instance API
 */
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

/**
 * Instance API tanpa token akses
 * @type {import('axios').AxiosInstance}
 */
export const apiWithoutToken = createAPI(false);

/**
 * Instance API dengan token akses
 * @type {import('axios').AxiosInstance}
 */
export const apiWithToken = createAPI(true);
