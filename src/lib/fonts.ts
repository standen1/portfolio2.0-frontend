// lib/fonts.js
import localFont from 'next/font/local';

export const satoshiLight = localFont({
  src: [
    {
      path: '../fonts/satoshi/Satoshi-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/satoshi/Satoshi-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/satoshi/Satoshi-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi-light',
});

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

export const satoshiMedium = localFont({
  src: [
    {
      path: '../fonts/satoshi/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/satoshi/Satoshi-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/satoshi/Satoshi-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi-medium',
});

export const satoshiBold = localFont({
  src: [
    {
      path: '../fonts/satoshi/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/satoshi/Satoshi-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/satoshi/Satoshi-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi-bold',
});

export const satoshiBlack = localFont({
  src: [
    {
      path: '../fonts/satoshi/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/satoshi/Satoshi-Black.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/satoshi/Satoshi-Black.ttf',
      weight: '900',
      style: 'normal',
    }
  ],
  variable: '--font-satoshi-black',
});

export const satoshiBlackItalic = localFont({
  src: [
    {
      path: '../fonts/satoshi/Satoshi-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../fonts/satoshi/Satoshi-BlackItalic.woff',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../fonts/satoshi/Satoshi-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    }
  ],
  variable: '--font-satoshi-black-italic',
});