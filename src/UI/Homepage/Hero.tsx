import { AiFillStar } from "react-icons/ai";
import Button from "../../components/SmComponent/Button";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="bg-[#162473] text-white pt-9">
      <div className="relative grid grid-cols-11 py-20  px-5 lg:px-0 lg:ml-[6%]">
        <div className="flex flex-col justify-center col-span-11 md:col-span-8 lg:col-span-5 pr-30">
          <div className="flex items-center mb-8">
            <AiFillStar className=" text-[#FFB312]" />
            <p className="pl-3 text-base">4.9/5 on Capterra</p>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl leading-tight font-semibold lg:leading-none">
            One smart platform to grow global teams
          </h1>
          <p className="text-lg leading-[26px] my-8">
            Employ the best talent anywhere in the world, without an entity.
            Automate global payments for all employee types. Consolidate payroll
            for multiple entities on a single screen.
          </p>
          <div className="md:flex mt-8 relative">
            <button className="w-full md:w-fit px-10 py-5 bg-[rgb(12,30,223)] rounded-md text-white text-lg">
              Books demo
            </button>
            <button className="w-full md:w-fit mt-5 md:mt-0 py-5 lg:ml-5 rounded-lg px-[30px] font-bold text-[16px] bg-[#222F7A]">
              Available at your preferred time
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
