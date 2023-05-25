import React from 'react';

import Link from 'next/link';

import LogoIcon from '../../svgs/LogoIcon';

const Header = () => {
  return (
    <div className="flex justify-between p-2 items-center">
      <LogoIcon className="w-10 ml-4" />
      <div className="flex nav">
        <p className="mr-12">
          {' '}
          <Link href="/">QA</Link>
        </p>
        <p>
          {' '}
          <Link href="/overblik">overblik</Link>
        </p>
      </div>
    </div>
  );
};
export default Header;
