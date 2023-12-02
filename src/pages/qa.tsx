import React from 'react';

import Collapse from '../components/Header/Content/collapse';
import ContentContainer from '../components/Header/Content/contentContainer';
import Hero from '../components/Header/Hero/hero';

const Qa = () => {
  return (
    <section className="mb-auto">
      <Hero
        title="Spørgsmål og svar"
        heading="Hej, hvordan kan vi hjælpe dig?"
        bgColor="#4D8387"
      />

      <div className="px-8 py-24 lg:px-24 lg:py-36 xl:px-28 space-y-32 text-dp-grayscale-800">
        <div className="flex flex-col space-y-10 lg:flex-row lg:justify-between lg:space-x-20 lg:space-y-0">
          <div className="max-w-xl">
            <ContentContainer
              headline="Generelt"
              content={
                <>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </p>
                </>
              }
            />
          </div>
          <div className="max-w-xl">
            <ContentContainer
              headline="Anvendelse"
              content={
                <>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </p>
                </>
              }
            />
          </div>
        </div>

        <ContentContainer
          headline="Grundlæggelse"
          content={
            <>
              <Collapse
                headline="Hvordan får jeg adgang til min Dreamplan profil?"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit."
              />
              <Collapse
                headline="Hvornår begynder mit abonnement?"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit."
              />
            </>
          }
        />
      </div>
    </section>
  );
};

export default Qa;
