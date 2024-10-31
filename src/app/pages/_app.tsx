import type { AppProps } from 'next/app';

import { Roboto } from '@next/font/google';
import '../globals.css';

const roboto = Roboto({
  weight: ['400', '700'], // Adjust weights as needed
  subsets: ['latin'], // Choose subsets you want
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
