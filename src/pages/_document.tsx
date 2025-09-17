import { Html, Head, Main, NextScript } from "next/document";
import { satoshiRegular } from '../lib/fonts';
export default function Document() {
  // const satoshiRegular = require('../lib/fonts').satoshiRegular;
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
