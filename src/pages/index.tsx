import React from 'react';

import ContentQ from '../components/Content/ContentQ';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import Hero from '../components/Hero/hero';

const Index = () => {
  return (
    <>
      <Header />
      <Hero
        lilleOverskrift="Spørgsmål og svar"
        storOverskrift="Hej, hvordan kan vi hjælpe dig?"
      />
      <div className="mx-10 md:mx-20 lg:mx-36">
        <ContentQ />
        <Footer />
      </div>
    </>
  );
};

export default Index;
