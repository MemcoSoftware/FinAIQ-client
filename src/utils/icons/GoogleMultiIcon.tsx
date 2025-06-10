// src/components/icons/GoogleMultiIcon.tsx
'use client';

import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function GoogleMultiIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 256 262"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        fill="#4285F4"
        d="M255.42 133.16c0-8.82-.71-17.24-2.04-25.37H130.5v48.03h69.45c-3 25.1-12.16 46.4-25.94 60.7v50.44h41.9c24.54-22.6 38.51-55.76 38.51-96.8z"
      />
      <path
        fill="#34A853"
        d="M130.5 262c35.4 0 65.1-11.7 86.8-31.8l-41.9-50.4c-11.4 7.6-26.1 12.1-44.9 12.1-34.5 0-63.8-23.3-74.2-54.5H13.6v52.3C35.3 229.2 78.9 262 130.5 262z"
      />
      <path
        fill="#FBBC05"
        d="M56.3 158.3c-2.5-7.6-3.9-15.7-3.9-24.3s1.4-16.7 3.9-24.3V57.4H13.6C-6.9 84.6-6.9 135.4 13.6 162.6l42.7-4.3z"
      />
      <path
        fill="#EA4335"
        d="M130.5 52.1c18.2 0 34.6 6.3 47.5 18.7l35.6-35.6C195.6 13.3 164.6 0 130.5 0 78.9 0 35.3 32.8 13.6 81.7l42.7 33.7c10.4-31.2 39.7-54.5 74.2-54.5z"
      />
    </SvgIcon>
  );
}
