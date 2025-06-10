// src/components/SocialLoginComponent.tsx
'use client';

import React from 'react';
import { Button, Stack, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

const FACEBOOK_COLOR = '#1877F2';       // azul oficial Facebook
const ICON_SIZE = '2rem';             // alto y ancho para ambos iconos

export default function SocialLoginComponent() {
  return (
    <Stack spacing={2}>
      {/* Google */}
      <Button
        fullWidth
        variant="outlined"
        startIcon={
          <Box
            component="img"
            src="/img/web_neutral_rd_na.svg"
            alt="Google logo"
            sx={{ width: ICON_SIZE, height: ICON_SIZE }}
          />
        }
        sx={{
          borderColor: '#CBD5E0',
          color: '#67728A',
          py: 1.5,
          borderRadius: '20px',
          textTransform: 'none',
          justifyContent: 'center',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: '1.125rem',
        }}
      >
        Continue with Google
      </Button>

      {/* Facebook */}
      <Button
        fullWidth
        variant="outlined"
        startIcon={
          <FacebookIcon
            htmlColor={FACEBOOK_COLOR}
            sx={{ width: ICON_SIZE, height: ICON_SIZE }}
          />
        }
        sx={{
          borderColor: '#CBD5E0',
          color: '#67728A',
          py: 1.5,
          borderRadius: '20px',
          textTransform: 'none',
          justifyContent: 'center',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: '1.125rem',
        }}
      >
        Continue with Facebook
      </Button>
    </Stack>
  );
}
