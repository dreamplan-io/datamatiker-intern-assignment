import { AppProps } from "next/app";
import Footer from "../components/Header/Footer/footer";
import Navbar from "../components/Navbar";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
