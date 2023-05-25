import React from 'react';

const Hero = (props: any) => {
  return (
    <div
      style={{ backgroundColor: '#4e8387' }}
      className="bg-slate-400 text-white h-72 flex justify-center items-center"
    >
      <div className=" text-center">
        <h1 className="text-base font-medium uppercase">
          {props.lilleOverskrift}
        </h1>
        <p className="text-3xl font-semibold">{props.storOverskrift}</p>
      </div>
    </div>
  );
};
export default Hero;
