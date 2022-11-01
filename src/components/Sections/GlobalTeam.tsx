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
        <Title cls="lg:w-3/5">
          We know the challenges of building a global team
        </Title>
        <ArrowButton text="see all case studies" />
      </div>

      <div className="grid justify-between my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8">
        <Card1 cls="bg-[#1A1838] text-white sm:col-span-2 md:col-span-2 lg:col-span-2 flex flex-col items-center justify-center mb-5 md:mb-0">
          <h3 className="text-[30px] font-[500] w-3/5 text-center">
            Hire top talent and run payroll anywhere
          </h3>
          <p className="text-center text-[16px] font-[400] mt-3 w-3/5 ">
            From compliant contracts to international payments, get everything
            you need to build the best team on the planet.
          </p>
          <div className="pb-3 mt-5 text-center md:pb-0">
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

          <div className="px-8 py-5">
            <span className="px-2 py-1 text-sm text-white bg-blue-700">
              Global Hiring Guide
            </span>
            <Link href="/">
              <p className="my-2 text-2xl leading-tight">
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
          <div className="px-8 py-5">
            <span className="px-2 py-1 text-sm text-white bg-blue-700">
              payroll
            </span>
            <Link href="/">
              <p className="my-2 text-2xl leading-tight">
                5 global payroll trends to watch in 2022
              </p>
            </Link>
            <ArrowButton text="Read more" />
          </div>
        </Card1>
      </div>

      <Card1 cls="md:flex justify-between gap-x-8 p-10">
        <p className="flex-1 lg:text-lg">
          Get professional advice and tips on hiring remote talent and scaling
          businesses globally. Join over 50 000 subscribers now.
        </p>
        <div>
          <input
            type="text"
            placeholder="Email"
            className="lg:w-[400px] w-full my-5 md:my-0 outline-none border border-gray-300 rounded pl-5 p-2 md:p-5 font-semibold text-black"
          />
        </div>
        <div>
          <button className="px-12 py-2 font-semibold border border-black rounded-md lg:py-5 hover:bg-slate-100">
            Join now
          </button>
        </div>
      </Card1>
    </Section>
  );
};

export default GlobalTeam;
