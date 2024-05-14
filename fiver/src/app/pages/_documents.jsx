// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';
import logo from '../favicon.ico'

class MyDocument extends Document {
  render() {
    console.log('_document.tsx');
    return (
      <Html>
        <Head>
          {/* Metadados globais */}
          <link rel="shortcut icon" href={logo} />
          {/* Outros metadados globais */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

