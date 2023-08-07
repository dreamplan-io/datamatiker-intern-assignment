import React from 'react';
import LogoIcon from '../../../svgs/LogoIcon';
import LocationIcon from '../../../svgs/LocationIcon';
import EmailIcon from '../../../svgs/EmailIcon';
import PhoneIcon from '../../../svgs/PhoneIcon';
import CvrIcon from '../../../svgs/CvrIcon';
import LinkedinIcon from '../../../svgs/LinkedinIcon';
import FacebookIcon from '../../../svgs/FacebookIcon';
/*
Some dimensions are arbitrary values instead of Tailwind presets because 
I'm trying to follow the Figma design as closely as possible
*/
const Footer = () => {
  return (
    <footer className=" mt-60">
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex mt-2">
        <ul className="mx-auto w-[311px]">
          {/* Logo */}
          <LogoIcon width={0} height={0} className="flex mb-8 w-[85px] h-[78px] pt-3 md:pt-0 xl:pt-0" />
          {/* Contact info */}
          <li className="flex gap-3 mb-3">
            <LocationIcon width={0} height={0} className="flex w-[18px] h-[18px] " />
            <p className="font-alternative">Applebys Pl. 7, 1411 København, DK</p>
          </li>
          <li className="flex gap-3 mb-3">
            <EmailIcon width={0} height={0} className="flex w-[18px] h-[18px]" />
            <p className="font-alternative">kunderservice@dreamplan.io</p>
          </li>
          <li className="flex gap-3 mb-3">
            <PhoneIcon width={0} height={0} className="flex w-[18px] h-[18px]" />
            <p className="font-alternative">+ 45 4096 5874</p>
          </li>
          <li className="flex gap-3">
            <CvrIcon width={0} height={0} className="flex w-[18px] h-[18px]" />
            <p className="font-alternative">CVR 40965874</p>
          </li>
        </ul>
        {/* Social Media */}
        <div className="mx-auto w-[311px]">
          <div className="flex flex-col mt-16">
            <p className="font-alternative">Følg os på sociale medier:</p>
            <div className="flex flex-row gap-8 mt-3">
              <a href="https://www.linkedin.com/company/dreamplan" target="_blank">
                <LinkedinIcon width={0} height={0} className="w-[53px] h-[53px]" />
              </a>
              <a href="https://www.facebook.com/DreamPlan.io" target="_blank">
                <FacebookIcon width={0} height={0} className="w-[53px] h-[53px]" />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
      </div>
      <p className="font-alternative mt-20 mb-20 text-center">
        &copy; Copyright Dreamplan.io
      </p>
    </footer>
  )
};
export default Footer;
