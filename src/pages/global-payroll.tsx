import React from "react";
import { Section } from ".";
import Solutions from "../components/Layouts/Solutions";
import MyotaCard from "../components/MyotaCard";
import GlobalTeam from "../components/Sections/GlobalTeam";
import UnlockGrowth from "../components/Sections/UnlockGrowth";

const GlobalPayroll = () => {
  return (
    <Solutions
      bg={""}
      title={"Global Payroll on Autopilot"}
      featureImg={"group-500"}
    >
      <Section>
        <MyotaCard />
      </Section>
      <UnlockGrowth />
      <GlobalTeam />
      <div className="h-96"></div>
    </Solutions>
  );
};

export default GlobalPayroll;
