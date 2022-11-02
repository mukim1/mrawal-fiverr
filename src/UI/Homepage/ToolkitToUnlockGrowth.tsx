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
    <div className="relative my-20">
      <div className="flex items-center justify-between mb-10 ">
        <Title cls="lg:w-3/6">
          The complete toolkit to unlock global growth
        </Title>
        {/* <div className="flex gap-5 ">
          <AiOutlineArrowLeft />
          <AiOutlineArrowRight />
        </div> */}
      </div>
      <Carousel
        responsive={responsive}
        itemClass=""
        infinite
        renderDotsOutside={false}
        showDots={false}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        renderButtonGroupOutside={true}
        draggable={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
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
      <Card1 cls="hover:bg-blue-700 hover:text-white text-black h-[320px] overflow-hidden p-6 mx-2">
        <Image
          className={`${isHover ? "brightness-200" : "brightness-0"}`}
          src={`/images/${v.icon}.svg`}
          width={50}
          height={50}
          alt="I love africal black"
        />
        <div
          className={`transition duration-500 mt-5 ${
            isHover ? "translate-y-0" : "translate-y-32 md:translate-y-28"
          }`}
        >
          <h3 className="mb-5 text-2xl">{v.title}</h3>
          <small className="">{v.description}</small>
        </div>
      </Card1>
    </div>
  );
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  // const {
  //   carouselState: { totalItems, currentSlide },
  // } = rest;

  return (
    <div className="absolute top-12 right-2">
      <button onClick={previous} className="mr-6">
        <AiOutlineArrowLeft size={20} />
      </button>
      <button onClick={next}>
        <AiOutlineArrowRight size={20} />
      </button>
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
