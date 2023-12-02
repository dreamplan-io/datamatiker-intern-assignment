import React from 'react';

import ContentContainer from '../components/Header/Content/contentContainer';
import CtaButton from '../components/Header/Content/ctaButton';
import Hero from '../components/Header/Hero/hero';

// Overblik page
const Overblik = () => {
  return (
    <section className="mb-auto">
      <Hero
        title="Overblik"
        heading="Hej, her kan du få et overblik"
        bgColor="#669E83"
      />

      <div className="px-8 py-24 lg:px-24 xl:px-28 lg:py-36 space-y-16">
        <ContentContainer
          headline="Generelt"
          content={
            <>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit. <br /> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </p>
            </>
          }
        />
        <CtaButton href="/qa" text="Læs mere på Q&A siden" />
      </div>
    </section>
  );
};

export default Overblik;
