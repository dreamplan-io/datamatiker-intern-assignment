import React, { useEffect } from 'react';
import Hero from '../components/Header/Hero/hero';


interface OverblikProps {
  onClick: (component: string) => void;
}

const Overblik: React.FC<OverblikProps> = ({ onClick }) => {

  // Edit all texts here (headers, titles, paragraphs etc.)
  const pageTitle = 'Overblik';
  const header = 'Hej, her kan du få et overblik';
  const subHeader = 'Overblik';
  const heroBackgroundColor = '#669E83';
  const textSectionHeader = 'Generelt';
  const textSectionParagraphOne = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.';
  const textSectionParagraphTwo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.';
  const buttonText = 'Læs mere på Q&A siden';

  // Scrolls to top when clicking button
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Set browser page title to corresponding content
  useEffect(() => {
    document.title = `DreamPlan - ${pageTitle}`;
  }, [pageTitle]);

  return (
    <div>
      {/* Hero component */}
      <Hero header={header} subHeader={subHeader} backgroundColor={heroBackgroundColor} />
      {/* Section for overblik content */}
      <section className="bg-grayscale-100 flex justify-center">
        <div className='w-10/12 xs:py-header-mobile-padding lg:py-header-web-padding grid'>
          <div className='grid gap-2xl-gap'>
            <div className='grid gap-md-gap'>
              {/* Text section - "Generelt" */}
              <div className='grid gap-xs-gap'>
                <h2>{textSectionHeader}</h2>
                <p>
                  {textSectionParagraphOne}
                </p>
                <p>
                  {textSectionParagraphTwo}
                </p>
              </div>
              {/* Button that links to index  */}
              <button id='button' onClick={() => {
                  onClick('index');
                  scrollToTop();
                }}  
                className='md:justify-self-center hover:backdrop-brightness-150'>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overblik;
