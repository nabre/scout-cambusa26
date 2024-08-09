import React, { createContext, useState, useEffect, useContext } from 'react';
import authService from '../services/authService';
import { LoginCredentials, AuthContextType, User } from '../types/authTypes';

const Context = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        setIsAuthenticated(authService.isAuthenticated());
    }, []);

    const getUser = async () => {
        try {
            const response = await authService.getUser();
            setUser(response);
        } catch (error) {
            console.error('Error retrieving user:', error);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            getUser();
        }
    }, [isAuthenticated]);

    const login = async (credential: LoginCredentials) => {
        const success = await authService.login(credential);
        setIsAuthenticated(success);
        return success;
    };

    const logout = () => {
        authService.logout();
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <Context.Provider value={{ isAuthenticated, login, logout, user }}>
            {children}
        </Context.Provider>
    );
};


export const useAuthContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};