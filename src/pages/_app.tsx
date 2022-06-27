import { AppProps } from "next/app";
import Navbar from "../components/Navbar";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
);

export default MyApp;
