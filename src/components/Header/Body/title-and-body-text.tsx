import React, { useEffect, useState } from 'react';

const TitleAndBodyText: React.FC<{
  headerText: string;
  bodyText: string;
  largeBodyText: string;
}> = ({ headerText, bodyText, largeBodyText }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getText = () => {
    if (windowWidth >= 1024) {
      return largeBodyText;
    }
    return bodyText;
  };
  return (
    <div className="bg-white py-8 px-4 ml-5 mt-161">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{headerText}</h1>
      <p className="text-lg text-gray-800">{getText()}</p>
    </div>
  );
};

export default TitleAndBodyText;
