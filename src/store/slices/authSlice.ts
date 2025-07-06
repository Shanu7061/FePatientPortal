import { login, register } from "../index";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

interface AuthState {
  user: null | { name: string; email: string };
  accessToken: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credentials, {
        withCredentials: true,
      });
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (
    payload: { name: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      const res = await axios.post("/auth/register", payload, {
        withCredentials: true,
      });
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.accessToken = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice;
