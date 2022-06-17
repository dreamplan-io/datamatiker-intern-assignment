import React from 'react';
import Head from 'next/head';
import NavOverblik from '../Overblik/NavOverblik'
import LowerOverblik from '../Overblik/LowerOverblik';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';


const Index = () => {
  return (
    <div className="">
      <Head>
        <title>Overblik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='text-dp-headline-4-m font-alternative font-semibold text-center'>
          <Header/>
          <NavOverblik/>
          <LowerOverblik/>
          <Footer/>
        </div>
    </div>

  );
};

export default Index;
