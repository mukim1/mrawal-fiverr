import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Title from "../../components/Texts";

interface Props {
  data: {
    title: string;
    link: string;
  }[];
  model: "A" | "B";
}

const Sections = ({ data, model }: Props) => {
  if (model === "A") {
    return (
      <div className="my-10">
        {data.map((v: any, i: any) => (
          <div className="grid grid-cols-2 justify-between" key={i}>
            <div className="h-[350px] relative lg:my-16 mr-5">
              <Image
                src={v.src}
                alt={v.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col justify-center pl-32 text-gray-700">
              <Title>{v.title}</Title>
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
  }
  return <div></div>;
};

export default Sections;
