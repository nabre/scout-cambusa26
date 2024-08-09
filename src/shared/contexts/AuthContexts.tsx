import React, { createContext, useState, useEffect, useContext } from 'react';
import { LoginCredentials } from '#/types/authTypes';
import { useStoreValue } from '#/store/hooks/useStoreValue';
import { useAccountActions } from '#/store/hooks/useAccountActions';

const Context = createContext({ isAuthenticated: false, login: (credentials: LoginCredentials) => { }, logout: () => { }, user: null });

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { login, logout } = useAccountActions();
    const account = useStoreValue('account');
    const { isAuthenticated, user, status } = account;

    if (status == 'loading') return <div>Loading...</div>

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