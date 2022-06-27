import { AppProps } from 'next/app';
// @ts-ignore
import Layout from '../components/layout';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (

  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
