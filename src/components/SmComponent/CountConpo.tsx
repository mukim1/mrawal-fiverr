import React from "react";

const CountConpo = ({ num, title, cls }: any) => {
  return (
    <div className="flex flex-col text-black ">
      <h3 className="text-4xl font-bold text-[#1a1838] leading-[46px]">
        {num}
      </h3>
      <p className={`${cls} font-semibold`}>{title}</p>
    </div>
  );
};

export default CountConpo;
