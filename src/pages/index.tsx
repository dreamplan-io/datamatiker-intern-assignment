import React from 'react';
import Hero from '../components/Header/Hero/hero';
import DropDown from '../components/Dropdown/dropdown';

const heroSection: string = "Spørgsmål og svar";
const heroTitle: string = "Hej, hvordan kan vi hjælpe dig?";
const heroColor: any = "cyan";
const dropdownText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit."

const Index = () => {
  return (
    <>
     <Hero section={heroSection} title={heroTitle} color={heroColor} />
     <div className="flex flex-col md:flex-row justify-center">
      <article className="mx-auto mt-10 px-14 md:px-16 lg:px-30 xl:px-30 2xl:px-30">
          <h2 className="font-semibold text-dp-headline-5-m mb-3">Generelt</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>

        <article className="mx-auto mt-10 px-14 md:px-16 lg:px-30 xl:px-30 2xl:px-30">
        <h2 className="font-semibold text-dp-headline-5-m mb-3">Anvendelse</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
      </div>
      
      <div className="mx-auto mt-20 px-14 md:px-16 lg:px-30 xl:px-30 2xl:px-30">
        <h3 className="font-semibold text-[24px] mb-8">Grundlæggende</h3>
        <DropDown title="Hvordan får jeg adgang til min Dreamplan profil?" content={dropdownText}></DropDown>
        <DropDown title="Hvornår begynder mit abonnement?" content={dropdownText}></DropDown>
      </div>
      
    </>
  );
};

export default Index;
