import React from 'react';
import Link from 'next/link';
import LogoIcon from '../../../svgs/LogoIcon';
/*
Some dimensions are arbitrary values instead of Tailwind presets because 
I'm trying to follow the Figma design as closely as possible
*/
const Header = () => {
  return (
    <header className="flex items-center h-[52px] lg:h-[65px] xl:h-[75px]">
      <LogoIcon width={0} height={0} className="flex ml-8 lg:ml-10 xl:ml-12 w-[52px] h-[47px]"/>
      <ul className="flex justify-evenly mx-auto w-64">
        <li>
          <Link href="/">QA</Link>
        </li>
        <li>
          <Link href="/overblik">Overblik</Link>
        </li>
      </ul>
    </header>
  )
};
export default Header;
