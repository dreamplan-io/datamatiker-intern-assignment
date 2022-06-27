import { useState } from "react";
import Arrow from "../svgs/Arrow";

const ToggleDisplay = ({ title, text }: { title: string; text: string }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="my-8">
      <div
        className="cursor-pointer my-4 inline-flex"
        onClick={() => setActive(!active)}
      >
        <Arrow
          width={10}
          height={16}
          rotate={active ? 90 : 0}
          fill="none"
          className="mr-4 mt-2"
        />
        <h1 className="font-bold text-dp-headline-6-m">{title}</h1>
      </div>
      {active && <p className="ml-6">{text}</p>}
    </div>
  );
};

export default ToggleDisplay;
