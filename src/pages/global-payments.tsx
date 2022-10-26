import React from "react";
import { Section } from ".";
import Solutions from "../components/Layouts/Solutions";
import LogoSection from "../components/Sections/LogoSection";
import TrustedBy from "../components/Sections/TrustedBy";
import UnlockGrowth from "../components/Sections/UnlockGrowth";

const GlobalPayments = () => {
  return (
    <Solutions bg={""} title={"Pay your remote team"} featureImg={"gp_header"}>
      <Section>
        <LogoSection />
        <TrustedBy />
      </Section>
      <UnlockGrowth />
      <div className="h-96">

      </div>
    </Solutions>
  );
};

export default GlobalPayments;
