import { Tabs } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Layout from "./Layout";

interface Props {
  children: React.ReactNode;
  bg: string;
  title: string;
}

const Solutions = ({ children, bg, title }: Props) => {
  const { pathname } = useRouter();
console.log(bg)
  return (
    <Layout>
      <div className="mt-24">
        <Tabs
          color="yellow"
          value={pathname}
          className={`bg-[${bg ? bg : "#162473"}] border-t border-gray-600`}
        >
          <Tabs.List position="center">
            {data.map((item) => (
              <h3
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
        <div className={`min-h-screen bg-[${bg ? bg : " "}]`}>
          <h1>{title}</h1>
        </div>
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
