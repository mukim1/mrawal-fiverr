import type { NextPage } from "next";
import Hero from "../UI/Homepage/Hero/Hero";
import Layout from "../components/Layouts/Layout";
import Button from "../components/SmComponent/Button";
import { useCtx } from "../Contexts/GContext";
import Sections from "../UI/Homepage/Sections";
import LogoSection from "../components/LogoSection/LogoSection";
import CardSection from "../components/CardSection/CardSection";
import Image from "next/image";
import Card1 from "../components/Cards/Card1";

const Home: NextPage = () => {
  const { open } = useCtx();
  return (
    <Layout>
      <Hero />
      <Sections />
      <LogoSection />
      <div className="max-w-screen-xl mx-auto">
        <CardSection />
        <div className="flex">
          <h2>Trusted by thousands of market leaders</h2>
          <button>See all case studies</button>
        </div>
        
        <Card1 cls="grid grid-cols-2 overflow-hidden border-t mt-20 p-0">
          <div className="p-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            rem incidunt veritatis molestias repellendus ab odio, nam adipisci
            voluptas quidem expedita dolorum quod inventore modi veniam saepe
            numquam fugiat explicabo!
          </div>
          <div className="relative w-full h-screen max-h-[550px]">
            <Image src={"/images/2b.webp"} layout="fill" objectFit="cover" />
          </div>
        </Card1>

        <div className="grid grid-cols-2 gap-x-5 my-10 text-lg">
          <Card1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            numquam temporibus, optio laudantium ex modi in, veniam explicabo,
            aperiam ab dolorem sequi ducimus ipsa ipsam porro architecto
            excepturi dolore quis.
          </Card1>
          <Card1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            numquam temporibus, optio laudantium ex modi in, veniam explicabo,
            aperiam ab dolorem sequi ducimus ipsa ipsam porro architecto
            excepturi dolore quis.
          </Card1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
