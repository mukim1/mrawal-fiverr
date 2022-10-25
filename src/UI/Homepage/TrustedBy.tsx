import React from "react";
import Card1 from "../../components/Cards/Card1";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Title from "../../components/Texts";

const TrustedBy = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center">
        <Title cls="lg:w-3/5">Trusted by thousands of market leaders</Title>
        <div className=" flex items-center gap-2 text-blue-700 hover:underline">
          <Link href="#">
            <a className=" text-xl capitalize">see all case studies</a>
          </Link>
          <AiOutlineArrowRight />
        </div>
      </div>
      <Card1 cls="grid grid-cols-2 overflow-hidden border-t mt-20 p-0 relative">
        <div className="p-10">
          <div className="flex justify-between mb-10">
            <h3 className="text-3xl font-semibold">LOGO</h3>
            <div>
              <span>A</span>
              <span>A</span>
              <span>A</span>
              <span>A</span>
              <span>A</span>
            </div>
          </div>
          <p>
            “Given that it was the first time for us hiring remotely, it was
            really nice to have that kind of support. Without Lano's speedy and
            simple process, we probably would have lost the candidate.”
          </p>
        </div>
        <div className="relative w-full h-screen max-h-[550px]">
          <Image src={"/images/2b.webp"} layout="fill" objectFit="cover" />
        </div>
      </Card1>

      <div className="grid grid-cols-2 gap-x-5 my-10 text-lg">
        <Card1>
          <div className="">
            <div className="flex justify-between mb-10">
              <h3 className="text-3xl font-semibold">LOGO</h3>
              <div>
                <span>A</span>
                <span>A</span>
                <span>A</span>
                <span>A</span>
                <span>A</span>
              </div>
            </div>
            <p>
              “Given that it was the first time for us hiring remotely, it was
              really nice to have that kind of support. Without Lano's speedy
              and simple process, we probably would have lost the candidate.”
            </p>

            <div className="flex items-center gap-x-10">
              <div className="w-20 h-20 bg-slate-500 rounded-full"></div>
              <div>
                <p>David Rheinbay</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </Card1>
        <Card1>
          <div className="">
            <div className="flex justify-between mb-10">
              <h3 className="text-3xl font-semibold">LOGO</h3>
              <div>
                <span>A</span>
                <span>A</span>
                <span>A</span>
                <span>A</span>
                <span>A</span>
              </div>
            </div>
            <p>
              “Given that it was the first time for us hiring remotely, it was
              really nice to have that kind of support. Without Lano's speedy
              and simple process, we probably would have lost the candidate.”
            </p>
          </div>
        </Card1>
      </div>
    </React.Fragment>
  );
};

export default TrustedBy;
