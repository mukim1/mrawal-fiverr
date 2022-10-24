import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { data } from "../../data/sections";

const Sections = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-12">
      {data.map((v, i) => (
        <div className="grid grid-cols-2" key={i}>
          <div className="h-[350px] relative lg:my-16 mx-5">
            <Image src={v.src} alt={v.title} layout="fill" objectFit="cover" />
          </div>
          <div className="flex flex-col justify-center pl-32 text-gray-700">
            <h2 className=" text-5xl font-bold">{v.title}</h2>
            <p className="text-xl my-5">{v.description}</p>
            <div className="flex items-center gap-1 text-xl font-semibold text-blue-600 hover:underline">
              <Link href={v.link}>Lern more </Link>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sections;
