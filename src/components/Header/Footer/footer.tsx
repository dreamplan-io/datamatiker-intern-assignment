import React from 'react';

import CvrIcon from '../../../svgs/CvrIcon';
import EmailIcon from '../../../svgs/EmailIcon';
import FacebookIcon from '../../../svgs/FacebookIcon';
import LinkedinIcon from '../../../svgs/LinkedinIcon';
import LocationIcon from '../../../svgs/LocationIcon';
import LogoIcon from '../../../svgs/LogoIcon';
import PhoneIcon from '../../../svgs/PhoneIcon';

const Footer = ({}) => {
  return (
    <div className="w-full px-7 md:pt-20 md:flex md:justify-between">
      <div className="lg:justify-start">
        <LogoIcon width={48} height={48} />
        <br></br>
        <div className="flex items-center ">
          <LocationIcon width={18} height={18} />
          <p className="pl-4 py-1 ">Applebys Pl. 7, 1411 København DK</p>
        </div>
        <div className="flex items-center">
          <EmailIcon width={18} height={18} />
          <p className="pl-4 py-1">kundeservice@dreamplan.io</p>
        </div>
        <div className="flex items-center">
          <PhoneIcon width={18} height={18} />
          <p className="pl-4 py-1 ">+ 45 4096 5874</p>
        </div>
        <div className="flex items-center">
          <CvrIcon width={18} height={18} />
          <p className="pl-4 py-1">CVR 40965874</p>
        </div>
      </div>
      <br></br>
      <div>
        <p className="lg:justify-end">Følg os på sociale medier:</p>
        <div className="flex p-2 space-x-10 lg:justify-start">
          <LinkedinIcon width={58} height={58} />
          <FacebookIcon width={58} height={58} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
