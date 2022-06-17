import React from 'react';
import LogoIcon from '../../svgs/LogoIcon';
const Header = () => {
  return( 
  <div className='w-screen bg-white shadow-xl py-2'>
    <div className='flex'>
      <div className='pl-4 md:pl-10'>
      <LogoIcon className='' width={46} height={46}/>
      </div>
      <div className='flex mx-auto font-thin text-xs pt-2'>
        <button onClick={() => window.location.href='/qa'}>QA</button>
        <button onClick={() => window.location.href='/'} className='pl-10'>Overblik</button>
      </div>

    </div>
  </div>
  
  
  );
};
export default Header;
