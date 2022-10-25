import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Card1 from "../../components/Cards/Card1";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "../../data/card";
import Title from "../../components/Texts";

const CardSection = () => {
  return (
    <div className="my-20">
      <div className=" flex justify-between items-center mb-10">
        <Title cls="lg:w-3/5">The complete toolkit to unlock global growth</Title>
        <div className=" flex gap-5">
          <AiOutlineArrowLeft />
          <AiOutlineArrowRight />
        </div>
      </div>
      <Carousel
        responsive={responsive}
        itemClass="mr-5"
        renderDotsOutside={false}
        showDots={false}
      >
        {data.map((v: any) => (
          <Helper key={v.id} v={v} />
        ))}
      </Carousel>
    </div>
  );
};

export default CardSection;

const Helper = ({ v }: any) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Card1 cls="hover:bg-blue-700 hover:text-white text-black h-[300px] overflow-hidden p-7">
        <Image
          className={`${isHover ? "brightness-200" : "brightness-0"}`}
          src={`/images/${v.icon}.svg`}
          width={50}
          height={50}
        />
        <div
          className={`transition ${
            isHover ? "translate-y-0" : "translate-y-36"
          }`}
        >
          <h3 className="text-xl font-semibold mb-5">{v.title}</h3>
          <small className="">{v.description}</small>
        </div>
      </Card1>
    </div>
  );
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4.5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
