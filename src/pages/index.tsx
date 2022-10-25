import type { NextPage } from "next";
import Hero from "../UI/Homepage/Hero/Hero";
import Layout from "../components/Layouts/Layout";
import Sections from "../UI/Homepage/Sections";
import LogoSection from "../UI/Homepage/LogoSection";
import ToolkitToUnlockGrowth from "../UI/Homepage/ToolkitToUnlockGrowth";
import TrustedBy from "../UI/Homepage/TrustedBy";
import UnlockGrowth from "../UI/Homepage/UnlockGrowth";
import GlobalTeam from "../UI/Homepage/GlobalTeam";
import WhyChooise from "../UI/Homepage/WhyChooise";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Sections />
      <Section>
        <LogoSection />
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
  <div className={`max-w-screen-xl mx-auto py-10 ${cls}`}>{children}</div>
);
interface Props {
  children: React.ReactNode;
  cls?: string;
}
