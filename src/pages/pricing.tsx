import { TextInput } from "@mantine/core";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Card1 from "../components/Cards/Card1";
import Layout from "../components/Layouts/Layout";
import { data2 } from "../data/pricing";

const Pricing = () => {
  return (
    <Layout>
      <div className="px-5 pt-32 md:px-0">
        <h1 className="text-5xl leading-snug text-center text-gray-700">
          Everything you need. <br /> Nothing you don't.
        </h1>
        <h1 className="my-10 text-xl tracking-wider text-center text-gray-600">
          Our bookkeeping and banking tools can be used separately or together{" "}
          <br /> for maximum control of your business finances.
        </h1>

        <div className="items-end max-w-screen-lg mx-auto md:flex lg:px-14 gap-x-5">
          <TextInput
            placeholder="Enter your email"
            label="Email Address"
            radius={"md"}
            size="lg"
            className="w-full"
          />
          <TextInput
            placeholder="Create a password"
            label="Password"
            radius={"md"}
            size="lg"
            className="w-full"
          />
          <div className="w-full">
            <button className="w-full px-8 py-3 mt-10 text-lg font-semibold rounded-full bg-fuchsia-300 lg:mt-0">
              Create your free account
            </button>
          </div>
        </div>

        <div className="flex items-center mx-auto my-4 w-96 gap-x-3">
          <div className="h-[1px] bg-blue-500 flex-1"></div>
          <p>or</p>
          <div className="h-[1px] bg-blue-500 flex-1"></div>
        </div>

        <div className="mx-auto w-96">
          <button className="w-full px-8 py-3 text-lg font-semibold text-white bg-blue-400 rounded-full">
            Create your free account
          </button>
        </div>
        <div className="my-5 text-lg text-center">
          By signing up, you are indicating that you have read and agree to the
          <span className="font-semibold"> Terms of Use</span> and
          <span className="font-semibold"> Privacy Policy.</span>
        </div>
      </div>

      <div className="h-screen bg-blue-900 mt-60">
        <div className="flex justify-between max-w-screen-lg mx-auto -mb-40 -translate-y-48 gap-x-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex-1 p-10 bg-white border border-black shadow-sm rounded-xl hover:bg-orange-100 hover:border-orange-500"
            >
              <div className="text-center h-80">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.sub_title}</p>
                <h5 className="text-5xl font-bold text-violet-500 mt-7">$0</h5>
                <h6 className="mb-5 text-xl font-semibold">100% free</h6>
                <p className="text-gray-500 underline">
                  See all Accountiong feature
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-screen-lg mx-auto">
          <div className="grid p-10 bg-white rounded shadow-sm gap-x-8 lg:grid-cols-3">
            <div>
              <h5>Add on</h5>
              <h3 className="py-3 text-2xl font-bold">Recruitment (ATA)</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident blanditiis voluptates et, maiores rerum dolorem
                minima!
              </p>
            </div>

            <div className="border border-gray-200 rounded">
              <p className="p-3 border-b border-gray-200">
                <b className="text-lg">Basic</b> - 10 job offers
              </p>
              <div className="p-3">
                <b>$49/month</b>
                <p className="text-gray-600">
                  billed yearly or $59 month-to-month
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded">
              <p className="p-3 border-b border-gray-200">
                <b className="text-lg">Basic</b> - 10 job offers
              </p>
              <div className="p-3">
                <b>$49/month</b>
                <p className="text-gray-600">
                  billed yearly or $59 month-to-month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto">
        {data2.map((item) => (
          <div className="grid gap-5 py-10 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <button className="px-4 py-1 text-lg bg-orange-400 rounded-lg">
                FREE
              </button>
              <h3 className="pt-2 pb-1 text-3xl font-bold">{item.title}</h3>
              <p>{item.sub_title}</p>
            </div>
            <div>
              {item.col_1.map((v) => (
                <div className="flex tracking-wider text-gray-600 gap-x-3">
                  <AiOutlineCheck size={25} />
                  <p className="mb-5">{v}</p>
                </div>
              ))}
            </div>
            <div>
              {item.col_2.map((v) => (
                <div className="flex tracking-wider text-gray-600 gap-x-3">
                  <AiOutlineCheck size={25} />
                  <p className="mb-5">{v}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Pricing;

const data = [
  {
    id: 1,
    title: "Invoicing",
    sub_title: "Look like a pro",
    price: "$9",
  },
  {
    id: 2,
    title: "Accounting",
    sub_title: "Always be organized",
    price: "$19",
  },
  {
    id: 3,
    title: "Banking",
    sub_title: "Ditch fees, and bookkeeping",
    price: "$29",
  },
];
