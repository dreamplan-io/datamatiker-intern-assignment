import React from 'react';

interface Props {
  section: string
  title: string
  color: keyof typeof colorVariants
};

const colorVariants: { cyan: string, green: string  } = {
  cyan: "bg-dp-hero-cyan",
  green: "bg-dp-hero-green"
};

const Hero = ({ section, title, color }: Props) => {
  return (
    <div className={`${colorVariants[color]} flex flex-col justify-center text-center text-white h-80 mt-1 mb-32`}>
      <p className="font-medium text-dp-bodytext-l-m">{section.toUpperCase()}</p>
      <p className="font-semibold text-dp-headline-2-m">{title}</p>
    </div>
  )
};
export default Hero;
