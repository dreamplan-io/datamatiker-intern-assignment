import React, { useState, useEffect } from 'react';

const TitleAndDropDown: React.FC<{ bodyText: string; title: string }> = ({
  bodyText,
  title,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
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

  const getBodyTextWidth = () => {
    if (windowWidth >= 1080) {
      return '986px';
    }
    if (windowWidth >= 768) {
      return '675px';
    }
    return '100%';
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="relative">
      <button
        className="text-lg font-bold text-gray-800 bg-white py-2 px-4 rounded-md mb-4 flex items-start text-left"
        onClick={toggleDropdown}
      >
        <span className="mr-2">
          {dropdownVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </span>
        {title}
      </button>
      {dropdownVisible && (
        <div
          className="bg-white py-4 px-4"
          style={{ width: getBodyTextWidth() }}
        >
          <p className="text-base">{bodyText}</p>
        </div>
      )}
    </div>
  );
};

export default TitleAndDropDown;
