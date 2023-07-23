import React from 'react';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/Header/header';

const Overblik = () => {
  return (
    <>
      <Header />
      <div className="p-48 text-center text-dp-headline-2-t font-alternative font-bold">
        Overblik
      </div>
      <div className="xs:text-center">
        <div className="border-4 border-sky-800 w-100 h-88 xs:border-sky-800">
          <div className="p-48 text-center text-dp-headline-2-t font-alternative font-bold">
            Hej, her kan du få et overblik
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Overblik;
