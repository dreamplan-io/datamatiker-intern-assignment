import React from 'react';

import CvrIcon from '../../../svgs/CvrIcon';
import EmailIcon from '../../../svgs/EmailIcon';
import FacebookIcon from '../../../svgs/FacebookIcon';
import LinkedinIcon from '../../../svgs/LinkedinIcon';
import LocationIcon from '../../../svgs/LocationIcon';
import LogoIcon from '../../../svgs/LogoIcon';
import PhoneIcon from '../../../svgs/PhoneIcon';

const Footer = () => {
  return (
    <footer className="font-alternative text-dp-grayscale-800 flex w-full flex-col lg:flex-row px-8 lg:px-24 py-16 space-y-32 lg:space-y-0 ">
      <div className="space-y-3 w-full lg:h-72">
        <LogoIcon width={60} height={60} />
        <div className="flex space-x-2 items-center hover:underline">
          <LocationIcon width={16} height={22} />
          <a
            href="https://www.google.com/maps/place/Applebys+Pl.+7,+1411+K%C3%B8benhavn/@55.671335,12.5851452,17z/data=!4m6!3m5!1s0x4652533fc596626f:0xd15c5af5d23dea94!8m2!3d55.671335!4d12.5851452!16s%2Fg%2F11bw43k0c2"
            target="_blank"
            rel="noreferrer noopener"
          >
            Applebys Pl. 7, 1411 København, DK
          </a>
        </div>
        <div className="flex space-x-2 break-all items-center hover:underline">
          <EmailIcon width={20} height={18} />
          <a href="mailto:kundeservice@dreamplan.io">
            kundeservice@dreamplan.io
          </a>
        </div>
        <div className="flex space-x-2 items-center hover:underline">
          <PhoneIcon width={21} height={21} />
          <a href="tel:+4540965874">+ 45 4096 5874</a>
        </div>
        <div className="flex space-x-2 items-center">
          <CvrIcon width={18} height={22} />
          <p>CVR 40965874</p>
        </div>
      </div>

      <div className="w-full flex lg:justify-end items-center lg:h-72 lg:order-3">
        <div className="space-y-3">
          <p>Følg os på sociale medier:</p>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/company/dreamplan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon
                width={55}
                height={55}
                className="rounded-full hover:bg-slate-300 transition-colors"
              />
            </a>

            <a
              href="https://www.facebook.com/Dreamplan.io/?locale=da_DK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon
                width={55}
                height={55}
                className="rounded-full hover:bg-slate-300 transition-colors"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-end lg:w-min whitespace-nowrap lg:h-72 lg:order-2">
        <p className="">&copy; Copyright Dreamplan.io</p>
      </div>
    </footer>
  );
};
export default Footer;
