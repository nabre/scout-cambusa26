export interface User {
    id: string;
    username: string;
    email: string;
  }
  
  export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
  }
  
  export interface LoginCredentials {
    username: string;
    password: string;
  }
  
  export interface AuthContextType extends AuthState {
    login: (credentials: LoginCredentials) => Promise<boolean>;
    logout: () => void;
  }