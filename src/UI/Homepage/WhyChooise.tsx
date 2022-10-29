import React from "react";
import Button from "../../components/SmComponent/Button";
import { Section } from "../../pages";
import { IoIosRocket } from "react-icons/io";
import { data } from "../../data/WhyChooiseCard";
import SmCard from "../../components/SmComponent/SmCard";

const WhyChooise = () => {
  return (
    <div className="bg-[#1C1950] h-[600px] text-white">
      <Section cls="grid grid-cols-2">
        <div className="px-12 pt-20 pb-10 col-span-2 lg:col-span-1">
          <h2 className="text-2xl lg:text-5xl font-[500] mt">
            Why great businesses choose Lano?
          </h2>
          <p className="my-5 text-lg">
            We make it easy for you to hire the best talent and pay your team
            members, no matter where they are.
          </p>
          <Button />
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-y-6 translate-x-40 mt-[-40px]">
          <SmCard />
        </div>
      </Section>
    </div>
  );
};

export default WhyChooise;
