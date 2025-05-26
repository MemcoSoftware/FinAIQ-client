// src/config/axios.config.ts  (frontend)
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // p.ej. "http://localhost:8000/api"
  withCredentials: true,                     // para enviar/recibir cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
