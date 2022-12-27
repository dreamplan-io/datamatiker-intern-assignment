import React from 'react';
import Header from'../components/Header/Header/header'
import Footer from '../components/Header/Footer/footer'
import SummaryIcon from '../svgs/SummaryIcon';
import Hero from '../components/Header/Hero/hero'
const Index = () => {
  return ( 
    <div className='text-dp-grayscale-800'>
      <Header/>
      <Hero/>
    <section className="md:flex justify-between px-8 md:px-20 xl:px-24 mb-24">
      <div className="md:pr-16">
        <h3
          className="mb-4 text-dp-headline-5-m font-semibold md:text-dp-headline-4-m xl:text-dp-headline-3-t xl:tracking-[.025em]"
        >
          Generelt
        </h3>
        <p className="tracking-[.005em] pb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.<span className="hidden md:block"
            >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit.</span>
        </p>
      </div>
      <div className="md:pl-16">
        <h3
          className="mb-4 text-dp-headline-5-m font-semibold md:text-dp-headline-4-m xl:text-dp-headline-3-t md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] xl:filter-none xl:tracking-[.025em]"
        >
          Anvendelse
        </h3>
        <p className="tracking-[.005em]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.<span className="hidden md:block"
            >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit.</span>
        </p>
      </div>
    </section>
    <section className="px-8 md:px-20 xl:px-24">
      <h3
        className="mb-12 text-dp-headline-4-m font-semibold md:text-dp-headline-4-m xl:text-dp-headline-3-t tracking-[.24px] md:tracking-[0em] xl:tracking-[.025em]"
      >
        Grundlæggende
      </h3>
      <details>
        <summary className="flex text-dp-headline-6-m font-medium tracking-[.0015em] pb-6">
          <SummaryIcon className="my-1 mr-4" width={16} height={16}/>
          <p>Hvordan får jeg adgang til min Dreamplan profil?</p>
        </summary>
      </details>
      <details open className="tracking-[.005em] pb-32 ">
        <summary  className="flex text-dp-headline-6-m font-medium tracking-[.0015em] pb-2">
        <SummaryIcon  className="my-1 mr-4 origin-center rotate-90 " width={16} height={16}/>
          <p>Hvornår begynder mit abonnement</p>
        </summary>
        <p className="ml-8 tracking-[.005em] md:w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit.
        </p>
      </details>
    </section>
    <Footer/>
    
    </div>
  );
};

export default Index;
