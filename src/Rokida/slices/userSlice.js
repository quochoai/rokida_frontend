import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from 'Rokida/api/userApi';

export const register = createAsyncThunk('user/register', async (payload) => {
  const response = await userApi.register(payload);
  // save data to local storage
  // localStorage.setItem('access_token', response.jwt);
  // localStorage.setItem("9NNPbnATPDRlQe8QaiXG_token", signup.data.token);
  localStorage.setItem('user', JSON.stringify(response.data));

  return response.data;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  const response = await userApi.login(payload);

  // save data to local storage
  localStorage.setItem('access_token', response.data.token);
  localStorage.setItem('user', JSON.stringify(response.data.user));

  return response.data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem('user')) || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      localStorage.clear();

      state.current = {};
    }
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    }
  }
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;