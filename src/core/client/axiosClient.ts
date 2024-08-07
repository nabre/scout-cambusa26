import axios, { AxiosResponse, AxiosError } from 'axios';

// Creare un'istanza di axios con una configurazione di base
const axiosClient = axios.create({
  baseURL: `/api`,
});

// Aggiungere un interceptor per le richieste
axiosClient.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`;
  }
  return config;
}, (error: AxiosError) => {
  return Promise.reject(error);
});

// Aggiungere un interceptor per le risposte
axiosClient.interceptors.response.use((response: AxiosResponse) => {
  return response;
}, (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('TOKEN');
    window.location.reload();
    return Promise.reject(error);
  }
  return Promise.reject(error);
});

export default axiosClient;