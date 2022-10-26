import React from "react";
import Link from "next/link";
import Button from "../SmComponent/Button";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGlobal,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black p-14">
      <div className="grid grid-cols-5 gap-2 text-white">
        <div>
          <h2 className="mb-10 text-5xl font-bold">lano</h2>

          <p className="mb-2">Imprint</p>

          <p>Privacy Policy</p>
        </div>
        {data.map((v) => (
          <div className="flex flex-col justify-between " key={v.title}>
            <Link href={"/"}>
              <a className="text-xl font-semibold">{v.title}</a>
            </Link>
            {v.item.map((v2) => (
              <p className="py-4 text-sm " key={v2.item}>
                {v2.item}
              </p>
            ))}
          </div>
        ))}
      </div>
      {/* last */}
      <div className="flex items-center justify-between mt-20 ">
        <div className="flex gap-3 ">
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
      </div>
      <div className="flex items-center justify-between text-white mt-14 ">
        <p className="">© Lano Software GmbH 2022</p>
        <div className="flex gap-2 ">
          <AiOutlineGlobal size={20} />
          <p>English</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
const data = [
  {
    title: "Solutions",
    item: [
      {
        item: "Hire Employees",
        link: "/",
      },
      {
        item: "Run Global Payroll",
        link: "/",
      },
      {
        item: "Multi-Country Payroll",
        link: "/",
      },
      {
        item: "Global Salary Payments",
        link: "/",
      },
      {
        item: "Payroll Consolidation",
        link: "/",
      },
      {
        item: "Manage Contractors",
        link: "/",
      },
      {
        item: "Pay Remote Teams",
        link: "/",
      },
    ],
  },
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
