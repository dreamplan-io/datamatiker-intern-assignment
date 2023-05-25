import { useState, useEffect } from 'react';

const ResizableContainer = () => {
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const containerTopOffset = 0; // Adjust this value if you have any fixed elements at the top
      const newHeight = Math.min(windowHeight - containerTopOffset, 330);
      setContainerHeight(newHeight);
      setWindowWidth(window.innerWidth);
    };

    // Call the handleResize function initially
    handleResize();

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="relative flex flex-col justify-center items-center"
      style={{
        position: 'relative',
        height: containerHeight,
        width: '100vw',
        backgroundColor: '#4D8387',
      }}
    >
      <div className="text-white text-center font-montserrat font-medium text-dp-bodytext-l-m leading-8 tracking-0.5 mb-2">
        SPØRGSMÅL OG SVAR
      </div>
      <div style={{ maxWidth: '636px' }}>
        <div
          className={`text-white text-center font-montserrat font-medium ${
            windowWidth >= 1024 ? 'text-5xl' : 'text-3xl'
          } leading-12 tracking-0.5`}
        >
          Hej, hvordan kan vi hjælpe dig?
        </div>
      </div>
    </div>
  );
};

export default ResizableContainer;
