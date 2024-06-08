// src/app/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add your Google Analytics script here */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-SBWBC4757H"
          />
           {(Script as any).id = "ga-setup"}
          {(Script as any).children = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SBWBC4757H');
          `}
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
