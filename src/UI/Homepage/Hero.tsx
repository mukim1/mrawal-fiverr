import { AiFillStar } from "react-icons/ai";
import Button from "../../components/SmComponent/Button";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="bg-[#004650] text-white pt-9">
      <div className="relative grid grid-cols-11 py-20  px-5 lg:px-0 lg:ml-[6%]">
        <div className="flex flex-col justify-center col-span-11 pb-28 md:col-span-8 lg:col-span-5 pr-30">
          <div className="flex items-center mb-8">
            <AiFillStar className=" text-[#FFB312]" />
            <p className="pl-3 text-base">4.9/5 on Capterra</p>
          </div>
          <h1 className="text-2xl font-semibold leading-[55px!important] md:text-4xl lg:text-[44px]">
            One smart platform to grow global teams
          </h1>
          <p className="text-lg leading-[26px] my-8">
            Employ the best talent anywhere in the world, without an entity.
            Automate global payments for all employee types. Consolidate payroll
            for multiple entities on a single screen.
          </p>
          <div className="relative mt-8 md:flex">
            <button className="w-full md:w-fit px-10 py-4 bg-[#5E5CE4] rounded-md text-white text-lg">
              Sign up-its free
            </button>
            <button className="w-full md:w-60 mt-5 md:mt-0 py-4 lg:ml-5 rounded-lg px-[30px] text-[16px] bg-blue-100 text-[#5E5CE4]">
              Book a demo
            </button>
          </div>
        </div>
        <div className="h-[550px] hidden lg:block relative col-span-6 ml-5">
          <Image src="/assets/1.webp" layout="fill" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
