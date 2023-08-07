import React from 'react';
import Header from '../Header/Header/header';
import Footer from '../Header/Footer/footer';


const Layout: React.FC<{}> = ({ children }) => {

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
};
export default Layout;
