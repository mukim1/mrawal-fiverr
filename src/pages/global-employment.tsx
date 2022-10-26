import React from "react";
import { Section } from ".";
import Solutions from "../components/Layouts/Solutions";
import MyotaCard from "../components/MyotaCard";
import GlobalTeam from "../components/Sections/GlobalTeam";
import LogoSection from "../components/Sections/LogoSection";

const GlobalEmployment = () => {
  return (
    <Solutions
      bg={"bg-[#060C21]"}
      title={"Onboard employees in 150+ countries"}
      featureImg="eor-hero"
    >
      <Section>
        <LogoSection />
        <MyotaCard />
      </Section>
      <GlobalTeam />
    </Solutions>
  );
};

export default GlobalEmployment;
