import React from 'react';
import LogoIcon from '../../../svgs/LogoIcon';

const Header = () => {
  return <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <LogoIcon width={57} height={53.53}/>
        </div>
        <div className="space-x-6 justify-center pr-5 md: flex items-center">
          <a href="/qa" className="hover:text-darkGrayishBlue">QA</a>
          <a href="/overblik" className="hover:text-darkGrayishBlue">Overblik</a>
        </div>
      </div>
  </nav>;
};
export default Header;
