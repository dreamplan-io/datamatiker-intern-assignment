import React from 'react';
import { FiMapPin, FiMail, FiPhone, FiBook, FiFacebook, FiLinkedin } from 'react-icons/fi';
import PhoneIcon from '../../svgs/PhoneIcon';

const Footer = () => {
  return (
    <div className="text-left">
      <PhoneIcon width={20} height={25} />
      <FiMapPin /> Applebys pl. 7, 1411 København, DK
      <FiMail /> kundeservice@dreamplan.io
      <FiPhone /> +45 4096 5874
      <FiBook /> CVR 40965874 

      <div className="socialemedier">
        Sociale medier:
        <div className="flex">
          <div className="m-3 flex h-20 w-20 items-center justify-center rounded-full bg-white outline outline-black absolute button-y-0 right-0">
            <a href="https://www.linkedin.com/company/dreamplan/?originalSubdomain=dk">
              <FiLinkedin />
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="m-3 flex h-20 w-20 items-center justify-center rounded-full bg-white outline outline-black">
            <a href="https://www.facebook.com/Dreamplan.io/">
              <FiFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center">Copyright DreamPlan.io</div>
    </div>
  );
};

export default Footer;