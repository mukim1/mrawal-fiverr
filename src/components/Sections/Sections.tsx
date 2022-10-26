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
        <div className="grid grid-cols-2 justify-between" key={i}>
          {model === "A" ? (
            <Fragment key={i}>
              <Part2 v={v} />
              <Part1 v={v} A={A} />
            </Fragment>
          ) : (
            <Fragment key={i}>
              <Part1 v={v} />
              <Part2 v={v} />
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
      A ? "pl-32" : "pr-32"
    }`}
  >
    <Title>{v.title}</Title>
    <p className="text-xl my-5">{v.description}</p>
    <div className="flex items-center gap-1 text-xl font-semibold text-blue-600 hover:underline">
      <Link href={v.link}>Lern more </Link>
      <AiOutlineArrowRight />
    </div>
  </div>
);

const Part2 = ({ v, A }: any) => (
  <div className="h-[350px] relative lg:my-16 mr-5">
    <Image src={v.src} alt={v.title} layout="fill" objectFit="cover" />
  </div>
);
