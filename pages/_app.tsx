// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/material.css';
import Callout from './components/Callout';
import HighlightedCode from './components/code/HighlightedCode';
import NotificationInboxPreview from './components/magicbell/NotificationInboxPreview';
import Table from './components/Table';
import Tabs from './components/tabs/Tabs';

const components = {
  code: HighlightedCode,
  table: Table,
  Note: Callout,
  Tabs,
  HighlightedCode,
  NotificationInboxPreview,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
