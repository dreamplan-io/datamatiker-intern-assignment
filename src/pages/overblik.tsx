import React from 'react';

import ContentO from '../components/Content/ContentO';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import Hero from '../components/Hero/hero';

const Overblik = () => {
  return (
    <>
      <Header />
      <Hero
        lilleOverskrift="overblik"
        storOverskrift="Hej, her kan du få et overblik"
      />
      <div className="mx-10 md:mx-20 lg:mx-36">
        <ContentO />
        <Footer />
      </div>
    </>
  );
};

export default Overblik;
