import React from 'react';

import { BiBookContent } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlinePlace } from 'react-icons/md';
import { RiMailLine } from 'react-icons/ri';

import FacebookIcon from '../../svgs/FacebookIcon';
import LinkedinIcon from '../../svgs/LinkedinIcon';
import LogoIcon from '../../svgs/LogoIcon';

const Footer = () => {
  return (
    <>
      <div className="md:flex justify-between">
        <div>
          <LogoIcon className=" w-16 mb-6" />
          <div className="flex mb-3">
            <MdOutlinePlace className="text-2xl mr-2" />
            <p className="text-base">Applebys Pl. 7, 1411 København, DK</p>
          </div>
          <div className="flex">
            <RiMailLine className="text-2xl mr-2 mb-3" />
            <p className="text-base">kunderservice@dreamplan.io</p>
          </div>
          <div className="flex">
            <BsTelephone className="text-2xl mr-2 mb-3" />
            <p className="text-base">+ 45 4096 5874</p>
          </div>
          <div className="flex">
            <BiBookContent className="text-2xl mr-2" />
            <p className="text-base">CVR 40965874</p>
          </div>
        </div>
        <div className="mt-20">
          <p className="mb-4 text-base">Følg os på sociale medier:</p>
          <div className="flex">
            <button
              onClick={() => {
                location.href = 'https://www.linkedin.com/company/dreamplan/';
              }}
            >
              <LinkedinIcon className="w-16" />
            </button>
            <button
              onClick={() => {
                location.href = 'https://www.facebook.com/Dreamplan.io';
              }}
            >
              <FacebookIcon className="w-16 ml-6" />
            </button>
          </div>
        </div>
      </div>
      <p className="text-base	text-center mt-20 mb-28 md:mb-10">
        © Copyright Dreamplan.io
      </p>
    </>
  );
};
export default Footer;
