// src/app/_document.tsx
import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add your Google Analytics script here */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-SBWBC4757H"></script>
          <Script id="ga-setup">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag(&#39;js&#39;, new Date());
              gtag(&#39;config&#39;, &#39;YOUR_GOOGLE_ANALYTICS_ID&#39;);
            `}
          </Script>
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
