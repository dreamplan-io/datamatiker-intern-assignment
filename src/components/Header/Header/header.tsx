import React from 'react';

import Link from 'next/link';

import LogoIcon from '../../../svgs/LogoIcon';

const Header: React.FC = () => {
  return (
    <header className="flex p-4 justify-between w-screen">
      <div className=" w-1/3">
        <div className="pl-4 lg:pl-20 w-fit">
          <Link className="" href="/">
            <a>
              <LogoIcon width={60} height={60} />
            </a>
          </Link>
        </div>
      </div>

      <nav className="flex justify-center items-center w-1/3 space-x-10 text-dp-bodytext-m-dt">
        <Link href="/qa">
          <a className="hover:scale-110 transition-transform">QA</a>
        </Link>
        <Link href="/overblik">
          <a className="hover:scale-110 transition-transform">Overblik</a>
        </Link>
      </nav>
      <div className="w-1/3"></div>
    </header>
  );
};

export default Header;
