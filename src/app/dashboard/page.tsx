'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/modules/auth/hooks/useAuth';

export default function DashboardPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return <p className="p-4">Cargando...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Bienvenido, {user.name}</h1>
      {/* Aquí tu contenido protegido */}
    </div>
  );
}
