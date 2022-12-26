import React from 'react';
import LogoIcon from '../../../svgs/LogoIcon'
import LocationIcon from '../../../svgs/LocationIcon'
import EmailIcon from '../../../svgs/EmailIcon'
import PhoneIcon from '../../../svgs/PhoneIcon';
import CvrIcon from '../../../svgs/CvrIcon';
import LinkedinIcon from '../../../svgs/LinkedinIcon';
import FacebookIcon from '../../../svgs/FacebookIcon';
const Footer = () => {
  return <div>
     <footer className="px-8 md:px-20 xl:px-24 text-dp-bodytext-l-m md:flex justify-between text-dp-grayscale-800 tracking-[.0015em]">
      <section>
      <LogoIcon width={64} height={54}/>
        <div className="flex gap-4 mt-6">
        <LocationIcon width={12.76} height={18.43}/>
          <p className="xl:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">Applebys Pl. 7, 1411 København, DK</p>
        </div>

        <div className="flex gap-4 mt-3">
        <EmailIcon width={18.43} height={14.44}/>
          <p>kunderservice@dreamplan.io</p>
        </div>
        <div className="flex gap-4 mt-3">
        <PhoneIcon width={18.46} height={18.44}/>
          <p>+ 45 4096 5874</p>
        </div>
        <div className="flex gap-4 mt-3">
        <CvrIcon width={17.01} height={18.43}/>
          <p>CVR 40965874</p>
        </div>
      </section>
      <section className="pt-24 md:pt-20">
        <p>Følg os på sociale medier:</p>
        <div className="flex gap-6 pt-3">
          <a href="https://www.linkedin.com/company/dreamplan/?originalSubdomain=dk" target="_blank">
          <LinkedinIcon width={53} height={53}/>
          </a>
          <a href="https://www.facebook.com/Dreamplan.io" target="_blank">
          <FacebookIcon width={53} height={53}/>
          </a>
        </div>
      </section>
    </footer>
    <section className="flex justify-center pt-20 pb-44 md:pb-14">
      <p>© Copyright Dreamplan.io</p>
    </section>
  </div>;
};
export default Footer;
