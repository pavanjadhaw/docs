import Document, { Head, Html, Main, NextScript } from 'next/document';
import IntercomScripts from './components/scripts/IntercomScripts';
import SegmentScripts from './components/scripts/SegmentScripts';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/docs/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/docs/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/docs/favicon-16x16.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <SegmentScripts />
          <IntercomScripts />
        </body>
      </Html>
    );
  }
}
