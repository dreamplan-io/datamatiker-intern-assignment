import React from 'react';
import { Link } from 'react-router-dom'
import LogoIcon from '../../../svgs/LogoIcon'
const Header = () => {
  return <header className="h-14 mr-10 md:h-16 xl:h-20 flex items-center text-dp-grayscale-800">
      <LogoIcon width={64} height={54} className=" pl-6 pt md:pt-2 md:w-max xl:pt-0"/>
      <div className="flex w-64 justify-evenly mx-auto pt-1 md:pt-2.5 xl:pt-0">
        <Link to='pages/Index'>QA</Link>
        <a href="overblik.html">Overblik</a>
        
      </div>
   
  </header>;
};
export default Header;
