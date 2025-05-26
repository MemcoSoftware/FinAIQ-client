'use client';

import { FormEvent, useState } from 'react';

interface Props {
  onSubmit: (email: string, password: string) => void;
  error?: string | null;
}

export default function LoginForm({ onSubmit, error }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        onSubmit(email, password);
      }}
      className="max-w-sm mx-auto mt-16 p-6 shadow-lg rounded"
    >
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Iniciar Sesión
      </button>
    </form>
  );
}
