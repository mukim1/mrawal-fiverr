import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Title from "../Texts";

interface Props {
  data: {
    title: string;
    link: string;
  }[];
  model: "A" | "B";
}

const Sections = ({ data, model }: Props) => {
  const A = model === "A";
  return (
    <div className="my-10">
      {data.map((v: any, i: any) => (
        <div
          className="grid justify-between my-10 lg:mx-20 md:grid-cols-2 md:my-40"
          key={i}
        >
          {model === "A" ? (
            <Fragment key={i}>
              <Part2 v={v} A={A} />
              <Part1 v={v} A={A} />
            </Fragment>
          ) : (
            <Fragment key={i}>
              <Part1 v={v} A={A} />
              <Part2 v={v} A={A} />
            </Fragment>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sections;
const Part1 = ({ v, A }: any) => (
  <div
    className={`flex flex-col justify-center text-gray-700 ${
      A ? "lg:pl-0" : "md:pr-32"
    }`}
  >
    <Title>{v.title}</Title>
    <p className="md:my-5 md:text-lg lg:text-xl">{v.description}</p>
    <div className="flex items-center gap-1 font-semibold text-blue-600 hover:underline">
      <Link href={v.link}>
        <a className="text-base lg:text-xl">Learn more</a>
      </Link>
      <AiOutlineArrowRight />
    </div>
  </div>
);

const Part2 = ({ v, A }: any) => (
  <div
    className={`w-[80%] md:w-[90%] xl:w-[80%] mx-auto md:mx-0 relative ${
      A ? "mb-5 md:mb-0" : ""
    }`}
  >
    <Image
      src={v.src}
      alt={v.title}
      layout="responsive"
      width={100}
      height={60}
      objectFit="cover"
    />
  </div>
);
