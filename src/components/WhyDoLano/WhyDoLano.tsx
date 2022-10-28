import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Section } from "../../pages";
import Card1 from "../Cards/Card1";

import Button from "../SmComponent/Button";

const index = () => {
  return (
    <div className="bg-[#1C1950] h-[800px] text-white">
      <Section cls="grid grid-cols-2">
        <div className="px-12 pt-20 pb-10">
          <h2 className="text-5xl font-[500] mt">
            See what Lano can do for you
          </h2>
          <p className="my-2 text-lg">
            One smart platform with everything you need to build and pay your
            global team. Do you have questions about our solutions, pricing or
            do you need a consultation? Fill out the form and well get back to
            you shortly.
          </p>
          <div className="flex items-center justify-between">
            <Image
              src={`/images/why-do-lano.svg`}
              width={100}
              height={100}
              alt=""
            />
            <p className="text-lg ">Verified Partner since 2021</p>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <Image
              src={`/images/why-do-lano2.svg`}
              width={100}
              height={100}
              alt=""
            />
            <p className="text-lg ">4.9/5 on Capterra</p>
          </div>
        </div>

        <div className="mt-10">
          <Card1>
            <div className="p-10 ">
              <h2 className=" text-[#1a1838] text-2xl">
                Book your free Lano demo to start growing your global team
              </h2>
              <div>
                <form className="w-full max-w-lg mt-5">
                  <div className="flex flex-wrap mb-6 -mx-3">
                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                      <input
                        className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <input
                        className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder=" Last Name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-6 -mx-3">
                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                      <input
                        className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Business email"
                      />
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <input
                        className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="company name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-6 -mx-3">
                    <div className="w-full px-3">
                      <p className="text-lg font-[500]  text-gray-600">
                        How many people work at your company?
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2 -mx-3 ">
                    <button className="px-8 py-4 text-black border border-blue-700 rounded-lg active:border-black ">
                      1-10
                    </button>
                    <button className="px-8 py-4 text-black border border-blue-700 rounded-lg active:border-black ">
                      11-50
                    </button>
                    <button className="px-8 py-4 text-black border border-blue-700 rounded-lg active:border-black ">
                      51-200
                    </button>
                    <button className="px-8 py-4 text-black border border-blue-700 rounded-lg active:border-black ">
                      201-500
                    </button>
                  </div>
                  <div className="flex gap-5 ">
                    <input type="checkbox" size={50} />
                    <p className="text-black ">
                      I agree to the{" "}
                      <Link href="">
                        <span className="text-blue-600 underline">
                          Lano Privacy policy
                        </span>
                      </Link>
                    </p>
                  </div>
                  <div className="flex gap-5 ">
                    <input type="checkbox" size={50} />
                    <p className="text-black ">I have promo code </p>
                  </div>
                  <div className="flex items-center gap-5 mt-5 ">
                    <Button />{" "}
                    <p className="text-lg font-semibold text-black ">
                      Available at your preferred time
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </Card1>
        </div>
      </Section>
    </div>
  );
};

export default index;
