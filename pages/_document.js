import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { SkipNavLink } from 'nextra-theme-docs';
import { GA_TRACKING_ID, AW_TRACKING_ID } from '../lib/gtag';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });

            gtag('config', '${AW_TRACKING_ID}');
          `,
            }}
          />
        </Head>
        <body>
          <SkipNavLink styled />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
