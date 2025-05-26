// src/modules/auth/hooks/useAuth.tsx
'use client';

import { useState, useEffect, createContext, useContext, ReactNode, FC } from 'react';
import type { AuthResponse, User } from '../types/auth';
import * as authService from '../services/authService';

interface AuthContextValue {
  user: User | null;
  login: (creds: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Al montar, intenta rehidratar la sesión
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authService
        .me()
        .then((data) => setUser(data.user))
        .catch(() => {
          localStorage.removeItem('token');
          setUser(null);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (creds: { email: string; password: string }) => {
    const data: AuthResponse = await authService.login(creds);
    localStorage.setItem('token', data.token);
    setUser(data.user);
  };

  const logout = async () => {
    await authService.logout();
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider');
  return ctx;
};
