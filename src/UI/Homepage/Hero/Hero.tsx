import { AiFillStar } from "react-icons/ai";
import Button from "../../../components/SmComponent/Button";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="bg-[#162473] text-white pt-9">
      <div className="relative grid grid-cols-11 py-20 ml-[6%]">
        <div className="flex flex-col justify-center pr-32 col-span-5">
          <div className="flex items-center mb-8">
            <AiFillStar className=" text-[#FFB312]" />
            <p className="text-base pl-3">4.9/5 on Capterra</p>
          </div>
          <h1 className="text-5xl font-semibold leading-none">
            One smart platform to grow global teams
          </h1>
          <p className="text-lg leading-[26px] my-8">
            Employ the best talent anywhere in the world, without an entity.
            Automate global payments for all employee types. Consolidate payroll
            for multiple entities on a single screen.
          </p>
          <div className="mt-8">
            <Button />
            <button className="py-5 lg:ml-5 rounded-lg px-[30px] font-bold text-[16px] bg-[#222F7A]">
              Available at your preferred time
            </button>
          </div>
        </div>
        <div className="h-[550px] relative col-span-6 ml-5">
          <Image src="/assets/1.webp" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
