import React from 'react';
import Hero from '../components/Header/Hero/hero';
import { useRouter } from 'next/router';

const heroSection: string = "Overblik";
const heroTitle: string = "Hej, her kan du få et overblik";
const heroColor: any = "green";

const Overblik = () => {

  const router = useRouter()

  return (
    <>
     <Hero section={heroSection} title={heroTitle} color={heroColor} />
     <div className="flex flex-col md:flex-row justify-center">
      <article className="mx-auto mt-10 mb-10 px-14 md:px-16 lg:px-30 xl:px-30 2xl:px-30">
          <h2 className="font-semibold text-dp-headline-5-m md:font-alternative md:text-dp-headline-4-m lg:font-alternative lg:text-dp-headline-3-m xl:font-alternative xl:text-dp-headline-2-m 2xl:font-alternative 2xl:text-dp-headline-2-m mb-3">
            Generelt
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.
          </p>
        </article>
      </div>

      <div className="flex px-14 md:px-0 md:justify-center lg:px-0 lg:justify-center xl:px-0 xl:justify-center 2xl:px-0 2xl:justify-center">
        <button onClick={() => router.push("/")} className="bg-dp-blue-500 hover:bg-[#0400a9] rounded-full text-dp-bodytext-m-dt px-6 py-3 text-white">
          Læs mere på Q&A siden
        </button>
      </div>
    </>
  );
};

export default Overblik;
