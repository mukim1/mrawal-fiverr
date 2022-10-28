import React from "react";
import { Section } from ".";
import Solutions from "../components/Layouts/Solutions";
import MyotaCard from "../components/MyotaCard";
import GlobalTeam from "../components/Sections/GlobalTeam";
import LogoSection from "../components/Sections/LogoSection";
import Sections from "../components/Sections/Sections";
import { data } from "../data/solution";
import WhyDoLano from "../components/WhyDoLano/WhyDoLano";
import CardFor4Page from "../components/SmComponent/CardFor4Page";

const GlobalEmployment = () => {
  return (
    <Solutions
      bg={"bg-[#060C21]"}
      title={"Onboard employees in 150+ countries"}
      featureImg="eor-hero"
    >
      <Section>
        <Sections data={data} model={"B"} />
        <LogoSection />
        <CardFor4Page />
        <MyotaCard />
      </Section>

      <GlobalTeam />
      <WhyDoLano />
    </Solutions>
  );
};

export default GlobalEmployment;
