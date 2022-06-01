import React from 'react';

import Link from 'next/link';

import LogoIcon from '../../svgs/LogoIcon';

const Header = () => {
  return (
    <header className="w-full h-20 shadow-md fixed bg-white">
      <div className="flex justify-between mt-5">
        <Link href="/">
          <LogoIcon
            width={48}
            height={48}
            className={'flex-none ml-6 cursor-pointer'}
          />
        </Link>
        <div className="w-full flex justify-center space-x-10 p-5 mr-12">
          <Link href="/qa">QA</Link>
          <Link href="/">Overblik</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
