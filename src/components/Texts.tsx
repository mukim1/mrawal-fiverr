import React from "react";

const Title = ({ children, cls }: Props) => {
  return (
    <h2
      className={`text-3xl md:text-3xl lg:text-[42px] font-normal text-gray-700 leading-[50px!important] ${cls}`}
    >
      {children}
    </h2>
  );
};

export default Title;

interface Props {
  children: React.ReactNode;
  cls?: string;
}
