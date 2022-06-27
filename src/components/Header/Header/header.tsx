import React from "react";

const Header = ({
  title,
  sub,
  className,
}: {
  title: string;
  sub: string;
  className?: string;
}) => {
  return (
    <div
      className={
        "w-screen text-white pt-28 pb-20 text-center font-alternative md:p-36 " +
        className
      }
    >
      <p className="text-dp-bodytext-l-m">{sub}</p>
      <h1 className="font-bold text-dp-headline-2-m md:text-dp-headline-2-t">
        {title}
      </h1>
    </div>
  );
};
export default Header;
