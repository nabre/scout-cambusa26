import authService from "#/services/authService";
import { LoginCredentials, User } from "#/types/authTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";


// Thunk action per il login
export const login = createAsyncThunk<User, LoginCredentials>(
    'auth/login',
    async (credential, { rejectWithValue }): Promise<User | any> => {
        try {
            const response = await authService.login(credential)
            if (response) {
                const user = await authService.getUser();
                return user;
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
            const response = await authService.logout();
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

// Thunk action per il logout
export const getUser = createAsyncThunk(
    'auth/getUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await authService.getUser();
            return response;
            return null;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);



export default { login, logout, getUser };