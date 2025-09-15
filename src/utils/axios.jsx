import axios from "axios";

export const BASE_URL = "http://localhost:8800";

const api = axios.create({
  baseURL: BASE_URL,
});

// api interceptors for headers sending

let isRefreshing = null;

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        const refreshToken = localStorage.getItem("refreshToken");
        isRefreshing = axios.post(`${BASE_URL}/user/refresh-token`, {
          refreshToken,
        });
      }
      try {
        const res = await isRefreshing;

        const { accessToken } = res.data;

        if (accessToken) {
          localStorage.setItem("accessToken", accessToken);
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          isRefreshing = null;
        }
        return api(originalRequest);
      } catch (refresErro) {
        console.error("error when token refreshissement", refresErro);

        localStorage.clear();

        window.location.href = "/auth/sign-in";
        return Promise.reject(refresErro);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
