import { LoginCredentials, User } from '../types/authTypes';
import { LOGIN_ENDPOINT } from '../constants/apiEndpoints';
import { TOKEN_KEY } from '../constants/authConstants';
import client from '../client/axiosClient';


const authService = {
  login: async (credentials: LoginCredentials): Promise<boolean> => {
    try {
      const response = await client.post(LOGIN_ENDPOINT, credentials);
      
    /*  fetch(LOGIN_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });*/

      if (response.fulfilled) {
        const { token } = await response.json();
        localStorage.setItem(TOKEN_KEY, token);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  },

  logout: (): void => {
    localStorage.removeItem(TOKEN_KEY);
  },

  getToken: (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(TOKEN_KEY);
  },

  getUser: async (): Promise<User | null> => {
    // Implementa la logica per ottenere i dati dell'utente
    // Questo potrebbe coinvolgere una chiamata API usando il token
    return null;
  }
};

export default authService;