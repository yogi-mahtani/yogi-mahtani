'use client';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize('YOUR_GOOGLE_ANALYTICS_ID');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
