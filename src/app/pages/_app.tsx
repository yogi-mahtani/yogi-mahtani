'use client';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

import { Roboto } from '@next/font/google';

import '../globals.css';

const roboto = Roboto({
  weight: ['400', '700'], // Adjust weights as needed
  subsets: ['latin'], // Choose subsets you want
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize('G-3K9RVS7WPL'); // remove from here and add to env
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
