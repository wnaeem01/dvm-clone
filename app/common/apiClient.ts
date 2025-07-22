import axios from "axios";
import { store } from "../store"; // adjust path if needed
import { setUser, clearUser } from "../stores/userSlice";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // or your API base URL
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.user.value?.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = "Bearer " + token;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshResponse = await axios.post(
          "/api/auth/refresh", // your refresh endpoint
          {},
          { withCredentials: true }
        );
        const newToken = refreshResponse.data.accessToken;
        store.dispatch(setUser({ ...store.getState().user.value, accessToken: newToken }));
        api.defaults.headers.common["Authorization"] = "Bearer " + newToken;
        processQueue(null, newToken);
        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);
        store.dispatch(clearUser());
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);

export default api;