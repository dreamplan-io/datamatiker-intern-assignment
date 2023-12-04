import React, { useState, useEffect } from 'react';
import Hero from '../components/Header/Hero/hero';


const Index = () => {
  
  // Edit all texts here (headers, titles, paragraphs etc.)
  const pageTitle = 'Q&A';
  const header = 'Hej, hvordan kan vi hjælpe dig?';
  const subHeader = 'Spørgsmål og svar';
  const heroBackgroundColor = '#4D8387';
  const columnOneHeader = 'Generelt';
  const columnOneParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.';
  const columnTwoHeader = 'Anvendelse';
  const columnTwoParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.';
  const accordionHeader = 'Grundlæggende';
  const accordionSectionOneHeader = 'Hvordan får jeg adgang til min Dreamplan profil?';
  const accordionSectionOneParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.';
  const accordionSectionTwoHeader = 'Hvornår begynder mit abonnement?';
  const accordionSectionTwoParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.';


  // Set browser page title to corresponding content
  useEffect(() => {
    document.title = `DreamPlan - ${pageTitle}`;
  }, [pageTitle]);

  // Toggle the accordion
  // Accordion section 1 closed by default
  const [isOpenSection1, setIsOpenSection1] = useState(false);

  const toggleAccordionSection1 = () => {
    setIsOpenSection1(!isOpenSection1);
  };

  // Accordion section 2 open by default
  const [isOpenSection2, setIsOpenSection2] = useState(true);

  const toggleAccordionSection2 = () => {
    setIsOpenSection2(!isOpenSection2);
  };

  return (
    <div>
      {/* Hero component */}
      <Hero header={header} subHeader={subHeader} backgroundColor={heroBackgroundColor} />
      {/* Section for index content */}
      <section className="bg-grayscale-100 flex justify-center">
        <div className='w-10/12 xs:py-header-mobile-padding lg:py-header-web-padding grid'>
          <div className='grid gap-2xl-gap'>
            {/* Section with 2 columns ("Generelt" and "Anvendelse) */}
            <section className='grid xs:grid-cols-1 xs:gap-lg-gap md:grid-cols-2'>
              {/* Column 1 - "Generelt" */}
              <div className='md:max-w-xs lg:max-w-md grid gap-xs-gap'>
                <h2>{columnOneHeader}</h2>
                <p>{columnOneParagraph}</p>
              </div>
              {/* Column 2 - "Anvendelse" */}
              <div className='md:max-w-xs lg:max-w-md grid gap-xs-gap'>
                <h2>{columnTwoHeader}</h2>
                <p>{columnTwoParagraph}</p>
              </div>
            </section>
            {/* Section with accordion */}
            <section className='grid gap-lg-gap md:max-w-2xl lg:max-w-4xl'>
              <h2>{accordionHeader}</h2>
              <div className="grid gap-sm-gap">
                {/* Accordion section 1 (closed by default) */}
                <details className={`group [&_summary::-webkit-details-marker]:hidden flex items-center`}>
                  <summary className="flex cursor-pointer gap-2xs-gap" onClick={toggleAccordionSection1}>
                    <span className="relative h-5 w-5 shrink-0 transition-opacity duration-300 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`absolute mt-1 h-5 w-5 ${isOpenSection1 ? 'opacity-0 group-open:opacity-100' : 'opacity-100 group-open:opacity-0'}`}
                        style={{ transform: isOpenSection1 ? 'rotate(270deg)' : 'rotate(180deg)' }}
                        width="32" height="32" viewBox="0 0 24 24"
                      >
                        <path fill="currentColor" d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875L9.55 12Z" />
                      </svg>
                    </span>
                    {/* Accordion section 1 header and paragraph */}
                    <div className='grid gap-3xs-gap'>
                      <h3>{accordionSectionOneHeader}</h3>
                      {isOpenSection1 && (
                        <p className="transition-opacity duration-300 ease-in-out">
                          {accordionSectionOneParagraph}
                        </p>
                      )}
                    </div>
                  </summary>
                </details>
                {/* Accordion section 2 (open by default) */}
                <details className={`group [&_summary::-webkit-details-marker]:hidden flex items-center`}>
                  <summary className="flex cursor-pointer gap-2xs-gap" onClick={toggleAccordionSection2}>
                    <span className="relative h-5 w-5 shrink-0 transition-opacity duration-300 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`absolute mt-1 h-5 w-5 ${isOpenSection2 ? 'opacity-100 group-open:opacity-0' : 'opacity-0 group-open:opacity-100'}`}
                        style={{ transform: isOpenSection2 ? 'rotate(270deg)' : 'rotate(180deg)' }}
                        width="32" height="32" viewBox="0 0 24 24"
                      >
                        <path fill="currentColor" d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875L9.55 12Z" />
                      </svg>
                    </span>
                    {/* Accordion section 2 header and paragraph */}
                    <div className='grid gap-3xs-gap'>
                      <h3>{accordionSectionTwoHeader}</h3>
                      {isOpenSection2 && (
                        <p className="transition-opacity duration-300 ease-in-out">
                          {accordionSectionTwoParagraph}
                        </p>
                      )}
                    </div>
                  </summary>
                </details>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
