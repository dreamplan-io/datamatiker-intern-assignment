import React from 'react';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/Header/header';

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-48 text-center text-dp-headline-2-t font-alternative font-bold">
        Q&A
      </div>
      <div className="xs:text-center">
        <div className="border-4 border-sky-800 w-100 h-88 xs:border-sky-800">
          <div className="p-48 text-center text-dp-headline-2-t font-alternative font-bold">
            Hej, hvordan kan vi hjælpe dig?
          </div>
        </div>
        <div className="p-38 text-center text-dp-headline-3-t front-alternative">
          Generelt
          <p className="p-16 text-center text-dp-bodytext-l-m">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="p-38 text-center text-dp-headline-3-t front-alternative">
          Anvendelse
          <p className="p-16 text-center text-dp-bodytext-l-m front-Montserrat">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </p>
        </div>
        <div className="p-38 text-center text-dp-headline-3-t front-alternative">
          Grundlæggende
          <p className="p-16 text-center text-dp-bodytext-l-m front-Montserrat">
            Hvordan får jeg adgang til min Dreamplan profil?
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;