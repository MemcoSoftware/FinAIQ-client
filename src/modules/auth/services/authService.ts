import api from '@/utils/axios.config';
import type { LoginDTO, AuthResponse, MeResponse } from '../types/auth';

export const login = (creds: LoginDTO) =>
  api.post<AuthResponse>('/login', creds).then(r => r.data);

export const logout = async (): Promise<void> => {
  await api.post('/logout');
  localStorage.removeItem('token');
};

export const me = () => api.get<MeResponse>('/me').then(r => r.data);
