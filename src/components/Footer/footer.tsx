import React from 'react'
import CvrIcon from '../../svgs/CvrIcon'
import EmailIcon from '../../svgs/EmailIcon'
import FacebookIcon from '../../svgs/FacebookIcon'
import LinkedinIcon from '../../svgs/LinkedinIcon'
import LocationIcon from '../../svgs/LocationIcon'
import LogoIcon from '../../svgs/LogoIcon'
import PhoneIcon from '../../svgs/PhoneIcon'

const footer = () => {
  return (
    <div className='pl-8'>
      <div className='pt-20 md:pl-10'>
        <LogoIcon width={85} height={78}/>
      </div>
      <div className='grid md:grid-cols-2 md:space-x-60'>
        <div className=' py-6 md:pl-10'>
          <div className='flex py-2'>
            <LocationIcon width={12.76} height={18.43}/>
            <p className='text-xs pl-2 font-thin'>Applebys Pl.7, 1411 København,DK</p>
          </div>
          <div className='flex py-2'>
            <EmailIcon width={18.43} height={14.88}/>
            <p className='text-xs pl-2 font-thin'>kunderservice@dreamplan.io</p>
          </div>
          <div className='flex py-2'>
            <PhoneIcon width={18.46} height={18.44}/>
            <p className='text-xs pl-2 font-thin'>+ 45 4096 5874</p>
          </div>
          <div className='flex py-2'>
            <CvrIcon width={17.01} height={18.43}/>
            <p className='text-xs pl-2 font-thin'>CVR 40965874</p>
          </div>
        </div>
        <div className='py-12'>
          <p className='text-left text-xs font-thin'>Følg os på sociale medier:</p>
            <div className='flex space-x-4 pt-4'>
              <a href="https://www.linkedin.com/company/dreamplan/"><LinkedinIcon width={53} height={53}/></a>
            
            <a href="https://www.facebook.com/Dreamplan.io"><FacebookIcon className='' width={53} height={53}/></a>
            </div>
        </div>      
      </div>
      <div className='mx-auto text-xs font-thin py-14'>
        <p>© Copyright Dreamplan.io</p>
      </div>
    </div>
    
  )
}

export default footer