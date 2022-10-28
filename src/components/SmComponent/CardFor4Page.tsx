import React from "react";
import Card1 from "../Cards/Card1";
import Title from "../Texts";

const CardFor4Page = () => {
  return (
    <div className="bg-[#F3F6F9] py-10">
      <div className="my-10 ">
        <h2 className="text-[40px] leading-[46px] text-[#1a1838] font-noto w-3/5">
          Used by teams across the whole world, different industries and roles
        </h2>
      </div>

      <div className="flex justify-between gap-5">
        <Card1>
          <h2 className=" text-[30px] text-[#1a1838] font-[500] leading-[40px] ">
            HR & People Ops
          </h2>
          <p className=" text-lg font-[400] text-[#1a1838] mt-3">
            Effortlessly hire new colleagues when growing a global team,
            automate invoices & payslips, and execute payroll in 150+ countries
            and 50+ currencies with full compliance.
          </p>
        </Card1>
        <Card1>
          <h2 className=" text-[30px] text-[#1a1838] font-[500] leading-[40px] ">
            Finance
          </h2>
          <p className=" text-lg font-[400] text-[#1a1838] mt-3">
            Forget about the hurdles of overcoming local regulations, taxes, and
            laws when setting up contracts and payroll with our vetted partner
            network in 150+ countries.
          </p>
        </Card1>
        <Card1>
          <h2 className=" text-[30px] text-[#1a1838] font-[500] leading-[40px] ">
            Legal
          </h2>
          <p className=" text-lg font-[400] text-[#1a1838] mt-3">
            Focus on accelerating your growth and building a remote team with
            us. Hire the best talent in 150+ countries with local contracts and
            full compliance.
          </p>
        </Card1>
      </div>
    </div>
  );
};

export default CardFor4Page;
