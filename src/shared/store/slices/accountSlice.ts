import { User } from '#/types/authTypes';
import { StateWithStatus } from '#/types/reduxTypes';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


// Definizione dello stato dello slice
interface AccountState extends StateWithStatus {
  user: User | null;
  isAuthenticated: boolean;
}

// Stato iniziale
const initialState: AccountState = {
  user: null,
  isAuthenticated: false,
  loading: 'idle',
  error: null
};

// Thunk action per il login
export const login = createAsyncThunk<User, { username: string; password: string }>(
    'account/login',
    async ({ username, password }, { rejectWithValue }) => {
      try {
        // Simulazione di una chiamata API
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });
        
        if (!response.ok) throw new Error('Login failed');
        
        return await response.json();
      } catch (error) {
        return rejectWithValue((error as Error).message);
      }
    }
  );
  
  // Thunk action per il logout
  export const logout = createAsyncThunk(
    'account/logout',
    async (_, { rejectWithValue }) => {
      try {
        // Simulazione di una chiamata API
        const response = await fetch('/api/logout', { method: 'POST' });
        
        if (!response.ok) throw new Error('Logout failed');
        
        return;
      } catch (error) {
        return rejectWithValue((error as Error).message);
      }
    }
  );

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
          state.loading = 'pending';
          state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.loading = 'succeeded';
          state.user = action.payload;
          state.isAuthenticated = true;
        })
        .addCase(login.rejected, (state, action) => {
          state.loading = 'failed';
          state.user = null;
          state.error = action.payload as string;
        })
        // Logout cases
        .addCase(logout.fulfilled, (state) => {
          state.user = null;
          state.isAuthenticated = false;
        });
    }
  });

  // Esportazione delle azioni

// Selettori
//export const selectUser = (state: RootState) => state.account.user;
//export const selectIsAuthenticated = (state: RootState) => state.account.isAuthenticated;
//export const selectAccountLoading = (state: RootState) => state.account.loading;
//export const selectAccountError = (state: RootState) => state.account.error;

// Esportazione del reducer
export default accountSlice.reducer;