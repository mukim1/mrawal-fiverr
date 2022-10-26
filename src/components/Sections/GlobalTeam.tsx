import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Card1 from "../Cards/Card1";
import Title from "../Texts";
import { Section } from "../../pages";
import Image from "next/image";
import Button from "../SmComponent/Button";
import ArrowButton from "../SmComponent/ArrowButton";

const GlobalTeam = () => {
  return (
    <Section>
      <div className="flex items-center justify-between">
        <Title cls="lg:w-2/5">
          We know the challenges of building a global team
        </Title>
        <ArrowButton text="see all case studies" />
      </div>

      <div className="grid grid-cols-4 my-10 gap-x-8">
        <Card1 cls="bg-[#1A1838] text-white col-span-2 flex flex-col justify-between">
          <h3 className="text-[40px] text-center">
            Hire top talent and run payroll anywhere
          </h3>
          <p className="text-center text-[16px] font-[400] mt-3">
            From compliant contracts to international payments, get everything
            you need to build the best team on the planet.
          </p>
          <div className="mt-5 text-center ">
            <Button />
          </div>
        </Card1>
        <Card1 cls="p-0">
          <Image
            src={"/images/card1.webp"}
            layout="responsive"
            objectFit="cover"
            width={150}
            height={100}
            alt=""
          />
          <div className="flex flex-col justify-between px-8 py-5 hover:underline">
            <Link href="#">
              <a className="text-white bg-blue-700 ">Global Hiring Guide</a>
            </Link>
            <Link href="#">
              <p className="mb-2 text-2xl font-semibold">
                Hiring employees around the globe with Lano
              </p>
            </Link>
            <ArrowButton text="Read more" />
          </div>
        </Card1>
        <Card1 cls="p-0">
          <Image
            src={"/images/card2.webp"}
            layout="responsive"
            objectFit="cover"
            width={150}
            height={100}
            alt=""
          />
          <div className="flex flex-col justify-between px-8 py-5 hover:underline">
            <Link href="#">
              <a className="text-sm text-white bg-blue-700 ">payroll</a>
            </Link>
            <Link href="#">
              <p className="mb-2 text-2xl font-semibold">
                5 global payroll trends to watch in 2022
              </p>
            </Link>
            <ArrowButton text="Read more" />
          </div>
        </Card1>
      </div>

      <Card1 cls="flex justify-between gap-x-8">
        <p className="text-lg font-semibold ">
          Get professional advice and tips on hiring remote talent and scaling
          businesses globally. Join over 50 000 subscribers now.
        </p>
        <input
          type="text"
          placeholder="Email"
          className="w-[400px] outline-none border border-gray-300 rounded pl-5 font-semibold text-black"
        />
        <button className="px-12 py-5 font-semibold border border-black rounded-md hover:bg-slate-100">
          joinNow
        </button>
      </Card1>
    </Section>
  );
};

export default GlobalTeam;
