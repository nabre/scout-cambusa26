import axios, { AxiosResponse, AxiosError } from 'axios';
import { TOKEN_KEY } from '../constants/authConstants';

// Determina l'URL di base in base all'ambiente
const baseURL = "https://scout-cambusa26-server.test/api"  /*process?.env?.NODE_ENV === 'development'
  ? process.env.REACT_APP_API_URL_DEV
  : process.env.REACT_APP_API_URL_PRODUCTION;*/

// Creare un'istanza di axios con una configurazione di base
const client = axios.create({
  baseURL,
});

// Aggiungere un interceptor per le richieste
client.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem( TOKEN_KEY)}`;
  }
  return config;
}, (error: AxiosError) => {
  return Promise.reject(error);
});

// Aggiungere un interceptor per le risposte
client.interceptors.response.use((response: AxiosResponse) => {
  return response;
}, (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem( TOKEN_KEY);
    window.location.reload();
    return Promise.reject(error);
  }
  return Promise.reject(error);
});

export default client;