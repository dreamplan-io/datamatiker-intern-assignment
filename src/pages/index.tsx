import React from "react";

import Head from "next/head";

import Button from "../components/Header/Button/button";
import Footer from "../components/Header/Footer/footer";
import Header from "../components/Header/header";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Intern assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="w-full px-7 p-20 md:flex md:justify-between bg-dp-green items-center lg:px-40 lg:justify-center">
        <div className="">
          <h2 className="text-center text-dp-headline-5-m font-alternative text-white">
            OVERBLIK
          </h2>
          <div className="">
            <h1 className="text-center font-semibold text-dp-headline-2-t font-alternative text-white">
              Hej, her kan du få et overblik
            </h1>
          </div>
        </div>
      </div>
      <br></br>
      <div className="justify-between px-5">
        <h1 className="text-dp-headline-5-m font-semibold h-10">Generalt</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit.
        </p>
      </div>
      <br></br>
      <div className="lg:flex  lg:justify-center">
        <div className=" px-5 ">
          <Button linkRef="/qa" text="Læs mere på Q&A siden" />
        </div>
      </div>
      <br></br>
      <Footer />
      <div className="text-center">
        <p>© Copyright Dreamplan.io</p>
      </div>
    </div>
  );
};

export default Index;
