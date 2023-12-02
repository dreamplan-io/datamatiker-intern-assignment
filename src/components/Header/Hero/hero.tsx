import React from 'react';

interface HeroProps {
  bgColor: string;
  title: string;
  heading: string;
}

const Hero = (props: HeroProps) => {
  return (
    <div
      className="w-screen text-center flex justify-center font-bold text-white py-24"
      style={{ background: props.bgColor }}
    >
      <div className="w-5/6 lg:w-4/6 max-w-lg">
        <h6 className="text-dp-bodytext-l-m uppercase">{props.title}</h6>
        <h2 className="text-dp-headline-2-m  lg:text-dp-headline-2-t font-alternative">
          {props.heading}
        </h2>
      </div>
    </div>
  );
};
export default Hero;
