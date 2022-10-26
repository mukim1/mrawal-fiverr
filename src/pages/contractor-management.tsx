import React from "react";
import { Section } from ".";
import Solutions from "../components/Layouts/Solutions";
import MyotaCard from "../components/MyotaCard";
import LogoSection from "../components/Sections/LogoSection";
import UnlockGrowth from "../components/Sections/UnlockGrowth";
import GlobalTeam from "../components/Sections/GlobalTeam";
import Sections from "../components/Sections/Sections";
import { data2 } from "../data/solution";

const ContractorManagement = () => {
  return (
    <Solutions
      bg="bg-[#060C21]"
      title="Hire contractors globally"
      featureImg="cm-hero"
    >
      <Section>
        <Sections data={data2} model="B" />
        <LogoSection />
        <MyotaCard />
      </Section>
      <UnlockGrowth />
      <GlobalTeam />
      <div className="h-96"></div>
    </Solutions>
  );
};

export default ContractorManagement;
