import { Button, Menu } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { handleThemeChange } from "../../utils/utils";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import { TfiWorld } from "react-icons/tfi";
import { Resources, Solutions } from "./TBDropdowns";
import { AiOutlineMenu } from "react-icons/ai";

const Topbar = () => {
  const [navBg, setNavBg] = useState(false);
  // const isHome = props.name === 'Homepage' ? true : false;

  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  console.log(navBg);

  return (
    <div
      className={`fixed top-0 z-10 w-full shadow-sm transition px-10 ${
        navBg ? "bg-white text-black" : "bg-[#162473] text-white"
      }`}
    >
      <div className="flex items-center justify-between h-24 md:px-10">
        <div className="relative flex items-center justify-between gap-x-10">
          <Link href="/">
            <a
              className={`text-3xl font-bold ${navBg ? "text-green-500" : ""}`}
            >
              Lano
            </a>
          </Link>

          <div className="items-center justify-between hidden md:flex gap-x-8">
            <Solutions />
            <Resources />
            <Link href={"/pricing"}>
              <a className="text-[16px] hover:underline">Pricing</a>
            </Link>
          </div>
        </div>

        <div className="items-center justify-between hidden md:flex gap-x-6">
          <div className="p-2 rounded hover:text-black">
            <Link href="#">
              <TfiWorld size={16} />
            </Link>
          </div>

          <Link href="#">
            <a className="text-lg font-semibold hover:border-b-2">Login</a>
          </Link>
          <Button
            className="border-[#3f4a83] hover:bg-[#162473] hover:border-white"
            variant="outline"
            color="indigo"
            radius="md"
            size="lg"
          >
            Book a demo
          </Button>
        </div>

        <span className="cursor-pointer md:hidden">
          <AiOutlineMenu size={22} />
        </span>
      </div>
    </div>
  );
};

export default Topbar;
