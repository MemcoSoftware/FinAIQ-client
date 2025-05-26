'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (email: string, password: string) => {
    try {
      await login({ email, password });
      router.push('/dashboard');
    } catch (err: unknown) {
      // Si es un error de Axios
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? 'Error en la petición');
      }
      // Si es un Error genérico de JS
      else if (err instanceof Error) {
        setError(err.message);
      }
      // Cualquier otro caso
      else {
        setError('Error desconocido');
      }
    }
  };

  return <LoginForm onSubmit={handleSubmit} error={error} />;
}
