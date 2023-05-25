import React from 'react';

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
    </>
  );
};

export default Overblik;
