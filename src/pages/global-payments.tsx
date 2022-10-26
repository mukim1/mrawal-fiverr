import React from "react";
import { Section } from ".";
import Solutions from "../components/Layouts/Solutions";
import LogoSection from "../components/Sections/LogoSection";
import Sections from "../components/Sections/Sections";
import TrustedBy from "../components/Sections/TrustedBy";
import UnlockGrowth from "../components/Sections/UnlockGrowth";
import { data3 } from "../data/solution";

const GlobalPayments = () => {
  return (
    <Solutions bg={""} title={"Pay your remote team"} featureImg={"gp_header"}>
      <Section>
        <Sections data={data3} model="B" />
        <LogoSection />
        <TrustedBy />
      </Section>
      <UnlockGrowth />
      <div className="h-96"></div>
    </Solutions>
  );
};

export default GlobalPayments;
