import type { NextPage } from "next";
import Hero from "../UI/Homepage/Hero";
import Layout from "../components/Layouts/Layout";
import Sections from "../components/Sections/Sections";
import LogoSection from "../components/Sections/LogoSection";
import ToolkitToUnlockGrowth from "../UI/Homepage/ToolkitToUnlockGrowth";
import TrustedBy from "../components/Sections/TrustedBy";
import UnlockGrowth from "../components/Sections/UnlockGrowth";
import GlobalTeam from "../components/Sections/GlobalTeam";
import WhyChooise from "../UI/Homepage/WhyChooise";
import { data } from "../data/sections";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Section>
        <Sections data={data} model="A" />
        <LogoSection num="2000+" text="components" />
        <ToolkitToUnlockGrowth />
        <TrustedBy />
      </Section>
      <UnlockGrowth />
      <GlobalTeam />
      <WhyChooise />
    </Layout>
  );
};

export default Home;

export const Section = ({ children, cls }: Props) => (
  <div className={`max-w-screen-xl mx-auto py-10 px-5 ${cls}`}>{children}</div>
);
interface Props {
  children: React.ReactNode;
  cls?: string;
}
