import { LoginCredentials, User } from '../types/authTypes';
import { LOGIN_ENDPOINT, LOGOUT_ENDPOINT, USER_PROFILE_ENDPOINT } from '../constants/apiEndpoints';
import { TOKEN_KEY } from '../constants/authConstants';
import client from '../client/apiEndpoints';

const authService = {
  login: async (credentials: LoginCredentials): Promise<boolean> => {
    try {
      const response = await client.post(LOGIN_ENDPOINT, credentials);

      if (response.status === 200) {
        const { token } = await response.data;
        localStorage.setItem(TOKEN_KEY, token);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  },

  logout: async (): Promise<void> => {
    try {
      await client.post(LOGOUT_ENDPOINT);
      localStorage.removeItem(TOKEN_KEY);

    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  getToken: (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(TOKEN_KEY);
  },

  getUser: async (): Promise<User | null> => {
    try {
      const response = await client.get(USER_PROFILE_ENDPOINT);

      if (response.status === 200) {
        const user = await response.data;
        return user;
      }

      return null;
    } catch (error) {
      console.error('Login error:', error);
      return null;
    }
  }
};

export default authService;