import axios from "axios";
import store from "../store";

const instance = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.accessToken;
  if (token) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export default instance;
