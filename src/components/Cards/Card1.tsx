import React from "react";

const Card1 = ({ children, cls }: Props) => {
  return <div className={`bg-white rounded-3xl shadow p-10 cursor-pointer overflow-hidden ${cls}`}>
    {children}
  </div>;
};

export default Card1;

interface Props {
  children: React.ReactNode;
  cls?: string;
}
