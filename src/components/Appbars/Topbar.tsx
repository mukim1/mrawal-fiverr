import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TfiWorld } from "react-icons/tfi";
import { PhoneNenu, Resources, Solutions } from "./TBDropdowns";

const Topbar = () => {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-10 w-full shadow-sm transition px-5 ${
        navBg ? "bg-white text-black" : "bg-[#162473] text-white"
      }`}
    >
      <div className="flex items-center justify-between h-20 md:px-10">
        <div className="relative flex items-center justify-between gap-x-10">
          <Link href="/">
            <a
              className={`text-4xl font-[Ubuntu] font-extrabold ${
                navBg ? " text-teal-400" : ""
              }`}
            >
              lano
            </a>
          </Link>

          <div className="items-center justify-between hidden md:flex gap-x-8">
            <Solutions />
            <Resources />
            <Link href={"/pricing"}>
              <a className="text-[16px] hover:underline">Pricing</a>
            </Link>
            <Link href={"/about"}>
              <a className="text-[16px] hover:underline">About Us</a>
            </Link>
          </div>
        </div>

        <div className="items-center justify-between hidden md:flex gap-x-6">
          {/* <div className="p-2 rounded hover:text-black">
            <Link href="#">
              <TfiWorld size={16} />
            </Link>
          </div> */}

          {/* <Link href="/">
            <a className="text-lg font-semibold hover:border-b-2">Login</a>
          </Link> */}
          <Link href={"/"}>
            <button
              className={`py-2 px-3 rounded-lg ${
                navBg ? "bg-blue-700 text-white" : " bg-blue-700 text-white"
              }`}
            >
              Sign up - its free
            </button>
          </Link>
          <Link href={"/"}>
            <button
              className={`py-2 px-3 rounded-lg ${
                navBg ? "bg-blue-700 text-white" : " bg-blue-700 text-white"
              }`}
            >
              Book a demo
            </button>
          </Link>
        </div>

        <span className="cursor-pointer md:hidden">
          <PhoneNenu />
        </span>
      </div>
    </div>
  );
};

export default Topbar;
