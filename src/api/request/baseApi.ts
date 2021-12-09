import axios from 'axios';
export const api = axios.create({
  baseURL: 'http://dev.trainee.dex-it.ru/api',
});
api.interceptors.request.use((config) => {
  if(config != undefined && config.headers != undefined)
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
  
});
