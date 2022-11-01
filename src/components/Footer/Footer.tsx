import React from "react";
import Link from "next/link";
import Button from "../SmComponent/Button";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGlobal,
} from "react-icons/ai";
import { Accordion } from "@mantine/core";

const Footer = () => {
  return (
    <div className="bg-[#004650] md:p-14">
      <div className="hidden text-white md:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 lg:gap-10">
        <div className="hidden col-span-2 md:block md:col-span-1 ">
          <Image src={`/assets/logo2.png`} alt="" width={100} height={30} />
          <p className="mt-5 text-lg">
            Omni HR helps companies automate their end-to-end employee journey
            including recruitment, onboarding, time off, employee management,
            and more.
          </p>
          {/* <p className="mb-2">Imprint</p>
          <p>Privacy Policy</p> */}
          <div className="flex gap-8 mt-5 ">
            <div className="p-2 text-gray-300 rounded-full bg-slate-500 hover:text-white">
              <AiFillTwitterCircle size={25} />
            </div>
            <div className="p-2 text-gray-300 rounded-full bg-slate-500 hover:text-white">
              <AiFillFacebook size={25} />
            </div>
            <div className="p-2 text-gray-300 rounded-full bg-slate-500 hover:text-white">
              <AiFillLinkedin size={25} />
            </div>
            <div className="p-2 text-gray-300 rounded-full bg-slate-500 hover:text-white">
              <AiFillInstagram size={25} />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-3 col-span-2 ">
          {data.map((v) => (
            <div className="" key={v.title}>
              <Link href={"/"}>
                <a className="block mb-3 text-xl font-semibold">{v.title}</a>
              </Link>

              {v.item.map((v2) => (
                <p className="py-2 text-sm " key={v2.item}>
                  {v2.item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        {data.map((v) => (
          <Accordion key={v.title}>
            <Accordion.Item value={v.title}>
              <Accordion.Control className="text-white hover:bg-black">
                {v.title}
              </Accordion.Control>
              <Accordion.Panel sx={{ color: "white" }}>
                {v.item.map((v2) => (
                  <p className="py-1 text-sm" key={v2.item}>
                    {v2.item}
                  </p>
                ))}
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        ))}
      </div>

      {/* BOTTON BAR */}
      {/* <div className="flex items-center justify-between mt-20 ">
        <div className="flex flex-col gap-3 md:flex-row">
          <button className="px-5 py-2 text-white bg-gray-500 rounded-lg hover:underline">
            We’re hiring{" "}
          </button>
          <button className="px-6 py-3 text-white bg-gray-500 rounded-lg hover:underline">
            {" "}
            I’m a freelancer 👋
          </button>
        </div>
        <div className="flex gap-3 ">
          <AiFillTwitterCircle
            size={30}
            className=" text-gray-300 hover:text-[#FFFFFF]"
          />
          <AiFillFacebook
            size={30}
            className=" text-gray-300 hover:text-[#FFFFFF]"
          />
          <AiFillLinkedin
            size={30}
            className=" text-gray-300 hover:text-[#FFFFFF]"
          />
          <AiFillInstagram
            size={30}
            className=" text-gray-300 hover:text-[#FFFFFF]"
          />
        </div>
      </div> */}
      <div className="text-white mt-14">
        <p className="">© Lano Software GmbH 2022</p>
        {/* <div className="flex gap-2 ">
          <AiOutlineGlobal size={20} />
          <p>English</p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
const data = [
  {
    title: "For Companies",
    item: [
      {
        item: "Case Studies",
        link: "/",
      },
      {
        item: "Pricing",
        link: "/",
      },
      {
        item: "Global Hiring Guide",
        link: "/",
      },
      {
        item: "Global Payroll Guide",
        link: "/",
      },
      {
        item: "Integrations",
        link: "/",
      },
      {
        item: "Help Center",
        link: "/",
      },
      {
        item: "Terms and Conditions",
        link: "/",
      },
    ],
  },
  {
    title: "For Contractors",
    item: [
      {
        item: "Features",
        link: "/",
      },
      {
        item: "Help Center",
        link: "/",
      },
      {
        item: "Terms and Conditions",
        link: "/",
      },
    ],
  },
  {
    title: "Information",
    item: [
      {
        item: "About Us",
        link: "/",
      },
      {
        item: "Careers",
        link: "/",
      },
      {
        item: "Affiliate Program",
        link: "/",
      },
      {
        item: "GDPR & IT Security",
        link: "/",
      },
      {
        item: "Contact Us",
        link: "/",
      },
      {
        item: "Blog",
        link: "/",
      },
    ],
  },
];
// {
//   title: "Solutions",
//   item: [
//     {
//       item: "Hire Employees",
//       link: "/",
//     },
//     {
//       item: "Run Global Payroll",
//       link: "/",
//     },
//     {
//       item: "Multi-Country Payroll",
//       link: "/",
//     },
//     {
//       item: "Global Salary Payments",
//       link: "/",
//     },
//     {
//       item: "Payroll Consolidation",
//       link: "/",
//     },
//     {
//       item: "Manage Contractors",
//       link: "/",
//     },
//     {
//       item: "Pay Remote Teams",
//       link: "/",
//     },
//   ],
// },
