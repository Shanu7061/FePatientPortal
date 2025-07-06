import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

const authReducer = authSlice.reducer;

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
