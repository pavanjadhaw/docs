import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/material.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
