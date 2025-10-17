// lib/fonts.js
import localFont from 'next/font/local';

// Keep only the Regular weight which is used in the project
export const satoshiRegular = localFont({
  src: [
    {
      path: '../fonts/satoshi/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/satoshi/Satoshi-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/satoshi/Satoshi-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi-regular',
});