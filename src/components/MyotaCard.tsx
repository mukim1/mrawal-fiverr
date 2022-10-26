import React from "react";
import Card1 from "./Cards/Card1";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import CountConpo from "./SmComponent/CountConpo";
import Flag from "./SmComponent/Flag";

const MyotaCard = () => {
  return (
    <Card1 cls="grid grid-cols-2 overflow-hidden border-t mt-20 p-0 relative">
      <div className="p-10">
        <div className="flex justify-between mb-10">
          <h3 className="text-3xl font-bold">myota</h3>
          <div>
            <Flag />
          </div>
        </div>
        <p className="text-xl ">
          “Given that it was the first time for us hiring remotely, it was
          really nice to have that kind of support. Without Lanos speedy and
          simple process, we probably would have lost the candidate.”
        </p>
        <div className="flex items-center gap-2 mt-4 mb-8 text-blue-700 hover:underline">
          <Link href="#">
            <a className="text-xl capitalize ">see all case studies</a>
          </Link>
          <AiOutlineArrowRight />
        </div>
        <p className=" text-xl text-[#1a1838]">Thomas Gurry</p>
        <p className=" text-[#748095] text-xl">Founder & CEO at Myota</p>
        <div className="flex items-center justify-between mt-12">
          <CountConpo
            num="100%"
            title="compliant with local regulations"
            cls="w-3/5"
          />
          <CountConpo num="75%" title="less time spent on admin" cls="w-3/5" />
        </div>
      </div>
      <div className="relative w-full h-screen max-h-[550px]">
        <Image src={"/images/2b.webp"} layout="fill" objectFit="cover" alt="" />
      </div>
    </Card1>
  );
};

export default MyotaCard;
