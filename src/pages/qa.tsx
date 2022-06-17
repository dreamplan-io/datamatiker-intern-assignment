import Head from "next/head";
import React from "react";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import LowerQA from "../components/QA/LowerQA";
import MiddleQA from "../components/QA/MiddleQA";
import UpperQA  from "../components/QA/UpperQA";
const QA = () => {
  return (
    
    <div className="text-dp-headline-4-m font-alternative font-semibold text-center">
      <Head>
      <title>QA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <UpperQA/>
      <MiddleQA/>
      <LowerQA/>
      <Footer/>
    </div>
  );
};

export default QA;