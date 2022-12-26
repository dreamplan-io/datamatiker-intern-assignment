import React from 'react';
import Header from'../components/Header/Header/header'
import Footer from '../components/Header/Footer/footer'

import Hero from '../components/Header/Hero/hero'
const Overblik = () => {
  return (
    <div className='text-dp-grayscale-800' >
     <Header/>
      <Hero/>
      <section className="px-8 md:px-20 xl:px-24 mb-32">
      <h3 className="mb-4 text-dp-headline-5-m font-semibold md:text-dp-headline-4-m xl:text-dp-headline-3-t">Generelt</h3>
      <p className="pb-6 tracking-[.005em]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit.
      </p>
      <button
        className="w-60 h-12 mt-8 bg-dp-blue-500 rounded-full md:flex justify-center items-center mx-auto text-dp-bodytext-m-dt font-semibold text-dp-grayscale-100"
      >
        Læs mere på Q&A siden
      </button>
    </section>
      <Footer/>
    </div>
  );
};

export default Overblik;
