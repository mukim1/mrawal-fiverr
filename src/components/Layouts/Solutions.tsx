import { Tabs } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import Title from "../Texts";
import Layout from "./Layout";
import Image from "next/image";
import { Section } from "../../pages";

interface Props {
  children: React.ReactNode;
  bg: string;
  title: string;
  featureImg: string;
}

const Solutions = ({ children, bg, title, featureImg }: Props) => {
  const { pathname } = useRouter();
  console.log(bg);
  return (
    <Layout>
      <div className="mt-24">
        <Tabs
          color="yellow"
          value={pathname}
          className={`${bg ? bg : "bg-[#162473]"} border-t border-gray-600`}
        >
          <Tabs.List position="center">
            {data.map((item, i) => (
              <h3
                key={i}
                className={`text-lg px-5 py-5 ${
                  pathname === item.path
                    ? "text-yellow-500 border-b border-yellow-500"
                    : "text-white"
                }`}
              >
                <Link href={item.path}>{item.title}</Link>
              </h3>
            ))}
          </Tabs.List>
        </Tabs>

        <div
          className={`min-h-screen ${
            bg ? bg : "bg-[#162473]"
          } text-white text-center`}
        >
          <div className="flex items-center justify-center pt-16 pb-10">
            <AiFillStar className=" text-[#FFB312]" />
            <p className="pl-3 text-base">4.9/5 on Capterra</p>
          </div>
          <Title cls="text-center text-white">{title}</Title>
          <p className="text-xl md:w-2/3 lg:w-1/2 mx-auto lg:px-10 pt-8">
            Scale globally without opening a single entity. With our Employer of
            Record service, we help you onboard the perfect hire – faster and
            easier than ever before.
          </p>
          <button className="text-xl bg-cyan-500 py-5 px-10 rounded-xl mt-10">
            Boo a demo
          </button>
        </div>

        <Section cls="-translate-y-48">
          <Image
            src={`/images/${featureImg}.webp`}
            layout="responsive"
            alt=""
            width={100}
            height={35}
          />
        </Section>
        {children}
      </div>
    </Layout>
  );
};

export default Solutions;

const data = [
  {
    title: "Hire Global Employment",
    path: "/global-employment",
  },
  {
    title: "Run Global Payroll",
    path: "/global-payroll",
  },
  {
    title: "Manage Contractor",
    path: "/contractor-management",
  },
  {
    title: "Pay Remote Ream",
    path: "/global-payments",
  },
];
