'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useAuth } from '../hooks/useAuth'
import LoginForm from '../components/LoginForm'

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (email: string, password: string) => {
    try {
      await login({ email, password })
      
      toast.success('¡Login exitoso! 🎉')
      router.push('/dashboard')
    } catch (err: unknown) {
      let message = '🚨Hubo un error al iniciar sesión. Por favor, revise sus credenciales.🚨'

      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message ?? message
      } else if (err instanceof Error) {
        message = err.message
      }

      setError(message)                               // para tu inline fallback
      toast.error(message)                            // ← toast en error
    }
  }

  return <LoginForm onSubmit={handleSubmit} error={error} />
}
