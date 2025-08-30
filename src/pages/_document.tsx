import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // Import the font variable class
  // Note: This import must be at the top of the file
  // import { satoshiRegular } from '../lib/fonts';
  // But since _document.tsx is a custom document, we need to require it here
  const satoshiRegular = require('../lib/fonts').satoshiRegular;
  return (
    <Html lang="en">
      <Head />
      <body className={satoshiRegular.variable}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
