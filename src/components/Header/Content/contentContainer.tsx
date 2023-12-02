import React, { ReactNode } from 'react';

interface ContentProps {
  headline: string;
  content: ReactNode;
}

const ContentContainer = (props: ContentProps) => {
  return (
    <div className="space-y-3">
      <h3 className="font-alternative text-dp-headline-5-m lg:text-dp-headline-4-m xl:text-dp-headline-3-t font-semibold antialiased">
        {props.headline}
      </h3>
      <div className="text-dp-bodytext-l-m">{props.content}</div>
    </div>
  );
};

export default ContentContainer;
