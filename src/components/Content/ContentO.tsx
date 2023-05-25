import React from 'react';

import Link from 'next/link';

export default function ContentO() {
  return (
    <div className=" mt-24 mb-40">
      <p className="text-xl	md:text-2xl font-semibold lg:text-4xl mb-8">
        Generelt
      </p>
      <p className="text-base mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit.
      </p>
      <div className="md:text-center">
        <button
          style={{ backgroundColor: '#1000f6' }}
          className="rounded-3xl md:text-center font-semibold mt-8 text-white px-8 py-3"
        >
          <Link href="/"> Læs mere på Q&A siden</Link>
        </button>
      </div>
    </div>
  );
}
