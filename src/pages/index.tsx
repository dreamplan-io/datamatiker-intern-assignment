import React from 'react';

import ResizableContainer from '../components/Header/Body/resizable-container';
import TitleAndBodyText from '../components/Header/Body/title-and-body-text';
import TitleAndDropDown from '../components/Header/Body/title-and-drop-down';

const Index: React.FC = () => {
  return (
    <div>
      <div className="text-center text-dp-headline-2-t font-alternative font-bold">
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <ResizableContainer />
        </div>
      </div>
      <div>
        <div className="text-left text-dp-headline-2-t font-alternative font-normal flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2">
            <TitleAndBodyText
              headerText="Generelt"
              bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              largeBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit."
            />
          </div>
          <div className="w-full sm:w-1/2">
            <TitleAndBodyText
              headerText="Anvendelse"
              bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              largeBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit."
            />
          </div>
        </div>
        <div className="p-33 text-left">
          <h1 className="pl-7 border-l-4 border-blue-500 text-4xl font-bold text-gray-800 mb-4">
            Grundlæggende
          </h1>
        </div>
        <div className="text-left text-dp-headline-2-t font-alternative font-normal flex flex-col sm:flex-row">
          <div className="p-4">
            <TitleAndDropDown
              title="Hvordan får jeg adgang til min Dreamplan profil?"
              bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit."
            />
            <TitleAndDropDown
              title="Hvornår begynder mit abonnement?"
              bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
