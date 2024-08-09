import authService from "#/services/authService";
import { LoginCredentials, User } from "#/types/authTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Thunk action per il login
export const login = createAsyncThunk<User, LoginCredentials>(
    'auth/login',
    async (credential, { rejectWithValue }): Promise<User | any> => {
        try {
            // Simulazione di una chiamata API
            const response = await authService.login(credential)
            if (response) {
                return await authService.getUser();
            }
            return null;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

// Thunk action per il logout
export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            // Simulazione di una chiamata API
            const response = await authService.logout();
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);


export default { login, logout };