import axios from "axios";

const api = axios.create({
baseURL: "https://teamflow-backend-ftdj.onrender.com/api"
});

// ADD TOKEN AUTOMATICALLY      
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  console.log("TOKEN CHECK:", token); // DEBUG

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;