import React from 'react';
import Header from '../components/Header/Header/header';
import Footer from '../components/Header/Footer/footer';

const Overblik = () => {
  return (
    <div>
      <Header/>
      <div className="bg-green-800 h-1/5 w-full opacity-70">
        <div className="text-center pt-12 text-white">Overblik</div>
        <div className="text-center pb-12 text-white font-bold text-dp-headline-3-t">Hej, her kan du få et overblik</div>
      </div>
      <div className="p-12 pb-4 font-bold text-dp-headline-2-m">Generelt</div>
      <div className="pl-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.
      <br/><br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.
      </div>
      <Footer/>
    </div>
  );
};

export default Overblik;
