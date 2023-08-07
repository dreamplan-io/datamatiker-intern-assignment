import React, { useState } from 'react';
import DropDownIcon from '../../svgs/DropDownIcon';

interface Props {
  title: string;
  content: string; 
}

const DropDown = ({ title, content }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    
  };

  return (
    <>
      <div className="flex items-center mt-3">
        <div className={isOpen ? 'rotate-0' : 'rotate-90'}>
          <DropDownIcon width={0} height={0} className="w-4 h-4"></DropDownIcon>
        </div>
        <h2 className="cursor-pointer text-dp-headline-6-m font-medium hover:text-sky-600 ml-4" onClick={handleToggle}>
          {title}
        </h2>
      </div>
      {isOpen ? null : (
        <div className="flex items-center ml-8 break-words max-w-screen-2xl">
          {content}
        </div>
      )}
    </>
  );
};

export default DropDown;