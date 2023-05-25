import React from 'react';

import { IoIosArrowForward } from 'react-icons/io';

export default function ContentQ() {
  return (
    <div className="mt-20 mb-20">
      <div className="md:flex md:space-x-24 mb-24 lg:space-x-40">
        <div className="mb-12 sec">
          <h3 className="text-xl font-semibold mb-3">Generelt</h3>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </p>
        </div>

        <div className="sec">
          <h3 className="text-xl font-semibold mb-3">Anvendelse</h3>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-2xl mb-12">Grundlæggende</h3>
        <div className="flex mb-6">
          <IoIosArrowForward className="text-2xl mr-3" />
          <p className="font-semibold text-lg">
            Hvordan får jeg adgang til min Dreamplan profil?
          </p>
        </div>
        <div className="flex">
          <IoIosArrowForward className="text-2xl mr-3" />
          <p className="font-semibold text-lg">
            Hvordan begynder mit abonnement
          </p>
        </div>
        <p className="text-base ml-8 md:ml-9 mt-2 md:mr-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit.
        </p>
      </div>
    </div>
  );
}
