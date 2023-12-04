import React from 'react';


interface HeroProps {
  header: string;
  subHeader: string;
  backgroundColor: string;
}

const Hero: React.FC<HeroProps> = ({ header, subHeader, backgroundColor }) => {

  // Style object with backgroundColor
  const heroStyle = {
    backgroundColor: backgroundColor,
  };
  
  return (
    // Section for hero content
    <section className="bg-dp-mint-500 flex justify-center" style={heroStyle}>
      <div className='w-10/12 xs:py-header-mobile-padding lg:py-header-web-padding grid'>
        {/* Section with subheader and header */}
        <section className='max-w-xl justify-self-center grid gap-3xs-gap'>
          <p id="subheader">{subHeader}</p>
          <h1>{header}</h1>
        </section>
      </div>
    </section>
  );
};
export default Hero;
