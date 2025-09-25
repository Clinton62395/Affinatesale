import axios from "axios";

// const navigate = useNavigate();

export const BASE_URL = "https://affinetsales.onrender.com";

// Création d'une instance Axios personnalisée.
const api = axios.create({
  baseURL: import.meta.env.BACKEND_URL || BASE_URL,
  withCredentials: true,
});

// Variable pour stocker la promesse de la requête de rafraîchissement du jeton.
let isRefreshing = null;

// Intercepteur de requêtes :
api.interceptors.request.use(
  (config) => {
    // Récupération du jeton d'accès depuis le stockage local.
    const token = localStorage.getItem("accessToken");

    // Si un jeton d'accès existe, on l'ajoute à l'en-tête d'autorisation.
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur de réponses :
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // On vérifie si l'erreur est un 401 (Non autorisé) et si la requête n'a pas déjà été relancée.
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // On vérifie si une requête de rafraîchissement est déjà en cours.
      if (!isRefreshing) {
        const refreshToken = localStorage.getItem("refreshToken");
        // Assigne la promesse de la nouvelle requête de rafraîchissement à la variable.
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
        }
        // Relance la requête originale qui a échoué.
        return api(originalRequest);
      } catch (refreshError) {
        // Gère les erreurs si le rafraîchissement du jeton échoue.
        console.error("error when token refreshissement", refreshError);
        localStorage.clear();

        window.location.href = "/auth/sign-in";

        return Promise.reject(refreshError);
      } finally {
        // Réinitialise la promesse de rafraîchissement dans tous les cas.
        isRefreshing = null;
      }
    }
    return Promise.reject(error);
  }
);

// Exporte l'instance d'Axios configurée.
export default api;
