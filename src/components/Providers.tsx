'use client';             
import React from 'react';
import { AuthProvider } from '@/modules/auth/hooks/useAuth';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
