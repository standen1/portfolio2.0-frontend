import React, { ReactNode } from 'react';
import {
  satoshiLight,
  satoshiRegular,
  satoshiMedium,
  satoshiBold,
  satoshiBlack,
  satoshiBlackItalic,
} from '../../../lib/fonts';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${satoshiRegular.variable}`}>
      {children}
    </div>
  );
};

export default Layout;