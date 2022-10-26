import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { data } from "../../data/sections";
import Title from "../../components/Texts";
import ArrowButton from "../../components/SmComponent/ArrowButton";

const Sections = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-12">
      {data.map((v, i) => (
        <div className="grid grid-cols-2" key={i}>
          <div className="h-[350px] relative lg:my-16 mx-5">
            <Image src={v.src} alt={v.title} layout="fill" objectFit="cover" />
          </div>
          <div className="flex flex-col justify-center pl-32 text-gray-700">
            <Title>{v.title}</Title>
            <p className="my-5 text-xl">{v.description}</p>
            <ArrowButton text="learn more" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sections;
