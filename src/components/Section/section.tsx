import React, { ReactNode, useState } from 'react';

interface SectionProps {
  title: string;
  content: ReactNode; 
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  const [isFolded, setIsFolded] = useState(true);

  const handleToggle = () => {
    setIsFolded(!isFolded);
  };

  return (
    <div>
      <h2 className="font-mono text-xl font-semibold cursor-pointer" onClick={handleToggle}>
        {title}
      </h2>
      {isFolded ? null : (
        <div>
          {content}
        </div>
      )}
    </div>
  );
};

export default Section;