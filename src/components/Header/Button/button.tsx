import React, { FunctionComponent } from 'react';

import Link from 'next/link';

interface props {
  text: string;
  className?: string;
  linkRef?: string;
}

const Button: FunctionComponent<props> = ({ text, className, linkRef }) => {
  return (
    <Link href={`${!linkRef ? '' : `${linkRef}`}`}>
      <button
        className={`bg-dp-blue-500 text-white font-simibold rounded-full md:px-16 py-3 ${className}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
