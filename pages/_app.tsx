import { AppProps } from 'next/app';

import '../styles/global.css';

const WKB = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default WKB;
