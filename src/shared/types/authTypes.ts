export interface User {
  id: string;
  name: string;
  email: string;
  email_verified: boolean;
  impersonated:boolean;
  roles: string[];
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthContextType extends AuthState {  
  login: (credential: LoginCredentials) => void;
  logout: () => void;
}

