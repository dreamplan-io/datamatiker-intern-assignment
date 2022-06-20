import React from 'react';

const Header = () => {
  return <div className="p-8 flex flex-row border-4">
    <div className="basis-1/6">
      <img className="w-16 -m-4 " src="https://www.dreamplan.io/images/logo.png"></img>
    </div>
    <div className="basis-1/6"></div>
    <a href="/" className="basis-1/6 text-center font-bold">Q&A</a>
    <a href="/overblik" className="basis-1/6 text-center font-bold">Overblik</a>
  </div>;
};
export default Header;
