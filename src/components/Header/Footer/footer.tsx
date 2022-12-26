/* eslint-disable prettier/prettier */
import React from 'react';

import CvrIcon from '../../../svgs/CvrIcon';
import EmailIcon from '../../../svgs/EmailIcon';
import FacebookIcon from '../../../svgs/FacebookIcon';
import LinkedinIcon from '../../../svgs/LinkedinIcon';
import LocationIcon from '../../../svgs/LocationIcon';
import LogoIcon from '../../../svgs/LogoIcon';
import PhoneIcon from '../../../svgs/PhoneIcon';


const Footer = () => {
  return <div>
    <div className='sm:columns-1 md:columns-2 lg:columns-2 xl:columns-2'>
      <div className='xs:mx-7 md:mx-14 lg:mx-24'>
        <LogoIcon className='mb-3' width={50} height={50}/>
        <ul className='xs:text-xs flex justify-center flex-col'>
          <li className='flex py-1'>
            <LocationIcon className='pr-1' width={20} height={20}/>
            Applebys Pl. 7, 1411 København, DK
          </li>
          <li className='flex py-1'>
            <EmailIcon className='pr-1' width={20} height={20}/>
            kunderservice@dreamplan.io
          </li>
          <li className='flex py-1'>
            <PhoneIcon className='pr-1' width={20} height={20}/>
            + 45 4096 5874
          </li>
          <li className='flex py-1'>
            <CvrIcon className='pr-1' width={20} height={20}/>
            CVR 40965874
          </li>
        </ul>
      </div>

      <div className='xs:mx-7 md:mx-14 lg:mx-24'>
        <p className='xs:pt-10 md:pt-16'>Følg os på sociale medier:</p>
        <div className='flex md:mb-20'>
          <LinkedinIcon className='mr-2 mt-2' width={50} height={50}/>
          <FacebookIcon className='m-2' width={50} height={50}/>
        </div>
      </div>
    </div>
    <p className='text-center pt-20 pb-10'>© Copyright Dreamplan.io</p>
  </div>;
};
export default Footer;
