import { AppProps } from 'next/app';

import '../styles/global.css';
import Footer from '../components/Header/Footer/footer';
import Header from '../components/Header/Header/header';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="flex flex-col h-screen justify-between">
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;
