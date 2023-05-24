import React from 'react';

import Footer from '../components/Header/Footer/footer';
import NavBar from '../components/Header/Navbar';

const Overblik = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="border-8 border-green-600  xs:border-green-600"></div>
      <div className=" p-16 text-center text-dp-bodytext-6-m">
        Overblik
        <p className=" text-center p-48 text-dp-headline-2-t font-alternative font-bold ">
          Her kan du få et overblik
        </p>
        <div className="p-38 text-center text-dp-headline-3-t front-alternative">
          Generelt
          <p className=" -indent-0 p-16 text-justify text-dp-bodytext-l-m ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <button className="rounded-full bg-dp-blue-500">
            <p className="text-white">
              {' '}
              Læs mere på QA siden <a href="http://localhost:3002/"></a>
            </p>
          </button>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Overblik;
