import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { api } from '../slices/accountSlice';
import type { AppDispatch } from '#/store/store';
import { LoginCredentials } from '#/types/authTypes';

export const useAccountActions = () => {
    const dispatch = useDispatch<AppDispatch>();

    const login = useCallback((credentials: LoginCredentials) => {
        return dispatch(api.login(credentials));
    }, [dispatch]);

    const logout = useCallback(() => {
        return dispatch(api.logout());
    }, [dispatch]);

    const getUser = useCallback(() => {
        return dispatch(api.getUser());
    }, [dispatch]);

    return {
        login,
        logout,
        getUser,
    };
};
