import React from 'react';

import { FaChevronRight } from 'react-icons/fa6';

interface CollapseProps {
  headline: string;
  text: string;
}

const Collapse = (props: CollapseProps) => {
  return (
    <div className="pb-3">
      <details className="space-y-3 group">
        <summary className="flex items-center cursor-pointer list-none text-dp-headline-6-m w-fit font-medium hover:underline">
          <FaChevronRight className="h-6 mr-9 fill-dp-grayscale-800 group-open:rotate-90 transition-transform" />
          <h5>{props.headline}</h5>
        </summary>
        <div className="w-3/4 pl-14 text-dp-bodytext-l-m">
          <p>{props.text}</p>
        </div>
      </details>
    </div>
  );
};

export default Collapse;
