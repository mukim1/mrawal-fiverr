import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Card1 from "../../components/Cards/Card1";
import Title from "../../components/Texts";
import { Section } from "../../pages";
import Image from "next/image";

const GlobalTeam = () => {
  return (
    <Section>
      <div className="flex justify-between items-center">
        <Title cls="lg:w-3/5">
          We know the challenges of building a global team
        </Title>
        <div className=" flex items-center gap-2 text-blue-700 hover:underline">
          <Link href="#">
            <a className=" text-xl capitalize">see all case studies</a>
          </Link>
          <AiOutlineArrowRight />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-8 my-10">
        <Card1 cls="bg-cyan-800 col-span-2">
          <h3 className="text-center">
            Hire top talent and run payroll anywhere
          </h3>
        </Card1>
        <Card1 cls="p-0">
          <Image
            src={"/images/2b.webp"}
            layout="responsive"
            objectFit="cover"
            width={150}
            height={100}
          />
          <div className="p-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </div>
        </Card1>
        <Card1>Lorem ipsum dolor sit amet, consectetur adipisicing.</Card1>
      </div>

      <Card1 cls="flex justify-between gap-x-8">
        <p className=" text-lg font-semibold">
          Get professional advice and tips on hiring remote talent and scaling
          businesses globally. Join over 50 000 subscribers now.
        </p>
        <input
          type="text"
          placeholder="Email"
          className="w-[400px] outline-none border border-gray-300 rounded pl-5"
        />
      </Card1>
    </Section>
  );
};

export default GlobalTeam;
