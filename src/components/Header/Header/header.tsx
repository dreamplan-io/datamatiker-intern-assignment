import React from 'react';
import LogoIcon from '../../../svgs/LogoIcon';


interface HeaderProps {
  onClick: (component: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {

  // Edit all texts here (headers, titles, paragraphs etc.)
  const navItem1 = "Q&A";
  const navItem2 = "Overblik";

  return (
    <nav className='flex justify-center items-center'>
      <div className='w-10/12 py-5'>
      {/* Logo that links to index */}
      <a className='absolute top-2 hover:cursor-pointer' id='navItem' onClick={() => onClick('index')}><LogoIcon width={50} height={50}/></a>
        {/* Section with nav items */}
        <section className='flex gap-md-gap justify-center items-center'>
          {/* Nav item "Q&A" */}
          <button className='group transition ease-in-out duration-300' onClick={() => onClick('index')}>
            {navItem1}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-dp-grayscale-800"></span>
          </button>
          {/* Nav item "Overblik" */}
          <button className='group transition ease-in-out duration-300' onClick={() => onClick('overblik')}>
            {navItem2}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-dp-grayscale-800"></span>
          </button>
        </section>
      </div>
    </nav>
  );
};
export default Header;
