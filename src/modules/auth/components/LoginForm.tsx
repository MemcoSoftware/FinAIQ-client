// src/components/LoginForm.tsx
'use client';

import React, { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
import SocialLoginComponent from './SocialLoginComponent';

interface Props {
  onSubmit: (email: string, password: string) => void;
  error?: string | null;
}

export default function LoginForm({ onSubmit, error }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const toggleShow = () => setShowPassword((v) => !v);
  // Datos de ejemplo para los puntos de paginación
  const paginationDots = [
    { id: 1, active: false },
    { id: 2, active: true },
    { id: 3, active: false },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100%',
        bgcolor: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Panel Izquierdo – Formulario de Login */}
      <Paper
        elevation={4}
        sx={{
          width: { xs: '100%', md: '480px' },
          height: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Logo */}
        <Box sx={{ pt: 5, pl: 2, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="/img/logoFinAIQ.png"
              alt="FinAIQ Logo"
              sx={{ width: 220, height: 84, mr: 1 }}
            />
            {/* <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 600,
                color: '#1E2772',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              FinAIQ
            </Typography> */}
          </Box>
        </Box>

        {/* Contenido de Sign In */}
        <Box sx={{ px: 5 }}>
          {/* Header */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 600,
                mb: 3,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Sign In
            </Typography>
            <Typography variant="body1" sx={{ color: '#718096' }}>
              Don’t have an account?{' '}
              <Link
                href="#"
                underline="always"
                sx={{
                  color: '#1E2772',
                  fontWeight: 500,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Create now
              </Link>
            </Typography>
          </Box>

          {/* Error */}
          {error && (
            <Typography
              variant="body2"
              sx={{
                color: 'red',
                mb: 2,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {error}
            </Typography>
          )}

          {/* Formulario */}
          <Box component="form" onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  color: '#555555',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Email Address
              </Typography>
              <TextField
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                placeholder="your.email@example.com"
                sx={{
                  bgcolor: '#F1F3F6',
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                  borderRadius: 2,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{
                          bgcolor: '#70FF04',
                          borderRadius: 1,
                          '&:hover': { bgcolor: '#60DF00' },
                        }}
                      >
                        <EmailIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Password */}
            <Box sx={{ mb: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  color: '#555555',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Password
              </Typography>
              <TextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                placeholder="Enter your password"
                sx={{
                  bgcolor: '#F1F3F6',
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                  borderRadius: 2,
                }}
                InputProps={{
                  // El ojo a la izquierda, sin fondo
                  startAdornment: (
                    <InputAdornment position="start" sx={{ ml: 1 }}>
                      <IconButton
                        onClick={toggleShow}
                        edge="start"
                        sx={{
                          p: 0,                    // quita el padding extra
                          color: '#67728A',        // mismo color del candado
                        }}
                        aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  // El candado a la derecha, con fondo verde
                  endAdornment: (
                    <InputAdornment position="end" sx={{ mr: 1 }}>
                      <IconButton
                        edge="end"
                        sx={{
                          bgcolor: '#70FF04',
                          borderRadius: 1,
                          '&:hover': { bgcolor: '#60DF00' },
                        }}
                        disableRipple
                        aria-hidden
                      >
                        <LockIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Forgot Password */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <Link
                href="#"
                underline="always"
                sx={{
                  color: '#1E2772',
                  fontSize: '0.875rem',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Forgot Password?
              </Link>
            </Box>

            {/* Botón de Login */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                bgcolor: '#0A0D2C',
                color: 'white',
                py: 1.5,
                mb: 4,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: '0px 8px 12px rgba(30, 39, 114, 0.5)',
                '&:hover': {
                  bgcolor: '#0A0D2C',
                },
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Login Now
            </Button>
          </Box>

          {/* Divisor OR */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Divider sx={{ flexGrow: 1 }} />
            <Typography
              variant="caption"
              sx={{
                px: 2,
                color: '#718096',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              OR
            </Typography>
            <Divider sx={{ flexGrow: 1 }} />
          </Box>

          {/* Botones Social Login*/}
          <SocialLoginComponent />
        </Box>
      </Paper>

      {/* Panel Derecho – Ilustración y Paginación */}
      <Box
        sx={{
          flex: 1,
          bgcolor: '#F1F3F6',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Imagen de Ilustración */}
        <Box
          component="img"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwIiBoZWlnaHQ9IjAiLz4="
          alt="Login Illustration"
          sx={{
            width: '60%',
            maxWidth: 632,
            height: 'auto',
          }}
        />

        {/* Puntos de Paginación */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: 'absolute',
            bottom: 40,
            alignItems: 'center',
          }}
        >
          <IconButton size="small">
            <ChevronLeftIcon fontSize="small" />
          </IconButton>

          {paginationDots.map((dot) => (
            <Box
              key={dot.id}
              sx={{
                width: dot.active ? 8 : 4,
                height: 4,
                borderRadius: '50%',
                bgcolor: dot.active ? '#1E2772' : 'rgba(30, 39, 114, 0.5)',
                mx: 0.5,
              }}
            />
          ))}

          <IconButton size="small">
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
