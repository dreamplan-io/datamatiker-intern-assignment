import React from 'react';

import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiBook,
  FiFacebook,
  FiLinkedin,
} from 'react-icons/fi';

import PhoneIcon from '../../../svgs/PhoneIcon';

const Footer = () => {
  return (
    <>
      <div className="text-left">
        <PhoneIcon width={20} height={25} />
        <FiMapPin /> Appelsby pl. 7, 4111 København, DK
        <FiMail /> kundeservice@dreamplan.io
        <FiPhone /> + 45 4096 5874
        <FiBook /> CVR 40965874
      </div>

      <div className="socialemedier">
        Sociale medier:
        <div className="flex">
          <div className="m-3 flex h-20 w-20 items-center justify-center rounded-full bg-white outline outline-black absolute button-y-0 right-0  ">
            <p>
              <a href="https://www.linkedin.com/company/dreamplan/?originalSubdomain=dk">
                <FiLinkedin />
              </a>
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="m-3 flex h-20 w-20 items-center justify-center rounded-full bg-white outline outline-black">
            <p>
              <a href="https://www.facebook.com/Dreamplan.io/">
                <FiFacebook />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className=" text-center">Copyrigth DreamPlan.io</div>
    </>
  );
};
export default Footer;
