import React from "react";
import { Section } from ".";
import Solutions from "../components/Layouts/Solutions";
import MyotaCard from "../components/MyotaCard";
import GlobalTeam from "../components/Sections/GlobalTeam";
import UnlockGrowth from "../components/Sections/UnlockGrowth";
import CardFor4Page from "../components/SmComponent/CardFor4Page";
import WhyDoLano from "../components/WhyDoLano/WhyDoLano";

const GlobalPayroll = () => {
  return (
    <Solutions
      bg={""}
      title={"Global Payroll on Autopilot"}
      featureImg={"group-500"}
    >
      <Section>
        <MyotaCard />
        <CardFor4Page />
      </Section>
      <UnlockGrowth />
      <GlobalTeam />
      <WhyDoLano />
    </Solutions>
  );
};

export default GlobalPayroll;
