import React from "react";
import Button from "../../components/SmComponent/Button";
import { Section } from "../../pages";
import { IoIosRocket } from "react-icons/io";

const WhyChooise = () => {
  return (
    <div className="bg-[#1C1950] h-[600px] text-white">
      <Section cls="grid grid-cols-2">
        <div className="px-12 pt-20 pb-10">
          <h2 className="text-5xl font-[500] mt">
            Why great businesses choose Lano?
          </h2>
          <p className="my-5 text-lg">
            We make it easy for you to hire the best talent and pay your team
            members, no matter where they are.
          </p>
          <Button />
        </div>
        <div>
          <div className=" w-[300px] h-[180px] border border-gray-300 rounded bg-[#1C1A51]">
            <IoIosRocket />
            <p>Why great businesses choose Lano?</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WhyChooise;
