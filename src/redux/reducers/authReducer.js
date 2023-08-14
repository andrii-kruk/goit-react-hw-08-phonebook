import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { $instance, resetToken, setToken } from 'helpers';

// ----- Thunks -----
export const registerUserThunk = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const { data } = await $instance.post('/users/signup', userData);
      setToken(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const { data } = await $instance.post('/users/login', userData);
      setToken(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const { data } = await $instance.get('/users/current');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  'auth/logout',
  async (userData, thunkApi) => {
    try {
      const { data } = await $instance.post('/users/logout', userData);
      resetToken();

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// ----- Slice -----
const initialState = {
  token: null,
  userData: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      // ----- Register -----
      .addCase(registerUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = payload.user;
        state.token = payload.token;
      })
      .addCase(registerUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ----- Login -----
      .addCase(loginUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = payload.user;
        state.token = payload.token;
      })
      .addCase(loginUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ----- Logout -----
      .addCase(logoutUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUserThunk.fulfilled, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.userData = null;
        state.token = null;
      })
      .addCase(logoutUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ----- Refresh -----
      .addCase(refreshUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = payload;
      })
      .addCase(refreshUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

// ----- Selectors -----
export const selectUserToken = state => state.auth.token;
export const selectUserData = state => state.auth.userData;
export const selectUserLoggedIn = state => state.auth.isLoggedIn;
export const selectUserError = state => state.auth.error;
export const selectUserLoading = state => state.auth.isLoading;

export const authReducer = authSlice.reducer;
