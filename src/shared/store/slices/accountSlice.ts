import { User } from '#/types/authTypes';
import { StateWithStatus } from '#/types/reduxTypes';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, getUser } from '../reducers/accountActions';
import authService from "#/services/authService";

// Definizione dello stato dello slice
interface AccountState extends StateWithStatus {
  user: User | null;
  isAuthenticated: boolean;
}

// Stato iniziale
const initialState: AccountState = {
  user: null,
  isAuthenticated: false,
  status: 'idle',
  error: null
};

// Creazione dello slice
const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    // Aggiungere qui i reducer sincroni
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.isAuthenticated = authService.isAuthenticated();
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.user = null;
        state.error = action.payload as string;
      })

      //getUser cases
      .addCase(getUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.isAuthenticated = authService.isAuthenticated();
      })
      
      // Logout cases
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = authService.isAuthenticated();
      });
  }
});

export const api = { login, logout, getUser };

export default accountSlice.reducer;