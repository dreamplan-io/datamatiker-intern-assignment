import React from 'react';

import { FaChevronRight } from 'react-icons/fa6';

interface CollapseProps {
  headline: string;
  text: string;
}
// Expand-collapse toggle
const Collapse = (props: CollapseProps) => {
  return (
    <div className="pb-3">
      <details className="space-y-3 group">
        <summary className="flex items-center cursor-pointer list-none text-dp-headline-6-m w-fit font-medium hover:underline">
          <FaChevronRight className="h-4 xl:h-6 mr-4 xl:mr-9 fill-dp-grayscale-800 group-open:rotate-90 transition-transform shrink-0" />
          <h5>{props.headline}</h5>
        </summary>
        <div className="lg:w-3/4 pl-8 xl:pl-14 text-dp-bodytext-l-m">
          <p>{props.text}</p>
        </div>
      </details>
    </div>
  );
};

export default Collapse;
