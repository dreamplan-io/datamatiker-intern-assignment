/* eslint-disable prettier/prettier */
import React from 'react';

import Link from 'next/link';

import LogoIcon from '../../../svgs/LogoIcon';


const Header = () => {
  return <div>
    <nav className='flex'>
      <LogoIcon className='ml-6 md:ml-12 lg:ml-20 absolute mt-5' width={50}/>
      <div className='container mx-auto flex justify-center relative'>
        <ul className='flex flex-row'>
          <li className='m-8 text-base'>
            <Link href="/">
              <a href="">QA</a>
            </Link>
          </li>
          <li className='m-8 text-base'>
            <Link href="/overblik">
              <a href="">Overblik</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>;
};
export default Header;
