import { Button, Menu } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { handleThemeChange } from "../../utils/utils";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import NavDropdown from "./NavDropdown/NavDropdown";
import { TfiWorld } from "react-icons/tfi";

const Topbar = () => {
  return (
    <div className="fixed top-0 z-10 w-full bg-[#162473] shadow-sm">
      <div className="flex items-center justify-between h-20 md:px-10">
        <div className="flex items-center justify-between gap-6 ">
          <Link href="#">
            <a className="text-[40px] font-bold text-white ">lano</a>
          </Link>
          <div>
            {" "}
            <NavDropdown />
          </div>
          <div>
            {" "}
            <NavDropdown />
          </div>

          <Link href="#">
            <a className="text-[16px] font-[500] hover:text-[#1a1838] text-white">
              pricing
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div className="p-2 text-white rounded hover:bg-white hover:text-black">
            <Link href="#">
              <TfiWorld size={16} />
            </Link>
          </div>

          <Link href="#">
            <a className="text-white hover:border-b-2 font-semibold text-lg">Login</a>
          </Link>
          <Button
            className="text-white border-[#3f4a83] hover:bg-[#162473] hover:border-white"
            variant="outline"
            color="indigo"
            radius="md"
            size="lg"
          >
            Book a demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
