import React, { ReactNode } from 'react';
import {
  satoshiLight,
  satoshiRegular,
  satoshiMedium,
  satoshiBold,
  satoshiBlack,
  satoshiBlackItalic,
} from '../../../lib/fonts';

import Navigation from './Navigation/Navigation/Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${satoshiRegular.variable}`}>
      <Navigation />
        {children}
    </div>
  );
};

export default Layout;