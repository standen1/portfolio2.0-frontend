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
import Footer from './Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${satoshiRegular.variable}`}>
      <Navigation />
        <div style={{paddingBottom: '75px'}}>
          {children}
        </div>
      <Footer />
    </div>
  );
};

export default Layout;