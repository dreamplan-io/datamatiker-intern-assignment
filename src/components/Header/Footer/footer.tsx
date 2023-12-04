import React from 'react';
import LogoIcon from '../../../svgs/LogoIcon';
import LocationIcon from '../../../svgs/LocationIcon';
import EmailIcon from '../../../svgs/EmailIcon';
import PhoneIcon from '../../../svgs/PhoneIcon';
import CvrIcon from '../../../svgs/CvrIcon';
import LinkedinIcon from '../../../svgs/LinkedinIcon';
import FacebookIcon from '../../../svgs/FacebookIcon';


interface FooterProps {
  onClick: (component: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onClick }) => {

  // Edit all texts here (headers, titles, paragraphs etc.)
  const address = 'Applebys Pl. 7, 1411 København, DK';
  const email = 'kunderservice@dreamplan.io';
  const phoneNumber = '+ 45 4096 5874';
  const cvr = 'CVR 40965874';
  const soMeText = 'Følg os på sociale medier:';
  const copyright = '© Copyright Dreamplan.io';

  // Scrolls to top when clicking logo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className='flex justify-center items-center'>
      <div className='w-10/12 py-20'>
        <div className='flex flex-col md:flex-row gap-xl-gap justify-between'>
          <div className='flex flex-col gap-md-gap font-alternative'>
            {/* Logo that links to index */}
            <a onClick={() => {
                  onClick('index');
                  scrollToTop();
                }} className='hover:cursor-pointer'>
              <LogoIcon width={62} height={62}/>
            </a>
            {/* Div holding business information links */}
            <div className='flex flex-col gap-2xs-gap'>
              {/* Location */}
              <a href="https://maps.app.goo.gl/9t527SUibxGQZbk57" className='flex items-center gap-2xs-gap'>
                <LocationIcon width={18} height={18} />
                {address}
              </a>
              {/* Enail */}
              <a href="mailto:kunderservice@dreamplan.io" className='flex items-center gap-2xs-gap'>
                <EmailIcon width={18} height={18} />
                {email}
              </a>
              {/* Phonenumber */}
              <a href="tel:+ 45 4096 5874" className='flex items-center gap-2xs-gap'>
                <PhoneIcon width={18} height={18} />
                {phoneNumber}
              </a>
              {/* CVR */}
              <div className='flex items-center gap-2xs-gap'>
                <CvrIcon width={18} height={18}  />
                {cvr}
              </div>
            </div>
          </div>
          {/* Div holding so-me links */}
          <div className='flex items-center'>
            <div className='flex flex-col gap-2xs-gap items'>
            <p>{soMeText}</p>
            <div className='flex gap-sm-gap'>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/dreamplan/">
                <LinkedinIcon width={53} height={53}  />
                <a href=""></a>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/Dreamplan.io">
                <FacebookIcon width={53} height={53}  />
                <a href=""></a>
              </a>
            </div>
          </div>
        </div>
        </div>
        {/* Copyright */}
        <div className='justify-self-center max-w-xl mx-auto'>
          <p className='py-xl-gap text-center'>{copyright}</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
