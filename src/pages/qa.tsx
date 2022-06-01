import { FunctionComponent } from "react";

import Footer from "../components/Header/Footer/footer";
import Header from "../components/Header/header";

const qa: FunctionComponent = () => {
  return (
    <div>
      <Header />
      <div className="w-full px-7 p-20 md:flex md:justify-between bg-dp-cyan items-center lg:px-40 lg:justify-center">
        <div className="">
          <h2 className="text-center text-dp-headline-5-m font-alternative text-white">
            Spørgsmål og svar
          </h2>
          <div className="">
            <h1 className="text-center font-semibold text-dp-headline-2-t font-alternative text-white">
              Hej, hvordan kan vi hjælpe dig?
            </h1>
          </div>
        </div>
      </div>
      <br></br>
      <div className="lg:flex">
        <div className="md:justify-between px-5 lg:justify-end">
          <h1 className="text-dp-headline-5-m font-semibold h-10">Generalt</h1>
          <p className="lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>
        </div>
        <br></br>
        <div className="md:justify-between px-5 lg:justify-end">
          <h1 className="text-dp-headline-5-m font-semibold h-10">
            Anvendelse
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>
        </div>
      </div>
      <br></br>
      <div className="h-20"></div>
      <div className="px-5">
        <h1 className="text-dp-headline-4-m font-semibold h-10 ">
          Grundlæggende
        </h1>
        <ul className="list-disc px-5">
          <p className="text-dp-headline-6-m h-10">
            Hvordan får jeg adgang til min Dreamplan profil?
          </p>
          <p className="text-dp-headline-6-m h-10">
            Hvordan får jeg adgang til min Dreamplan profil?
          </p>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </li>
        </ul>
      </div>
      <br></br>
      <Footer />
      <div className="text-center">
        <p>© Copyright Dreamplan.io</p>
      </div>
    </div>
  );
};

export default qa;
