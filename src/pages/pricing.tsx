import { TextInput } from "@mantine/core";
import React from "react";
import Card1 from "../components/Cards/Card1";
import Layout from "../components/Layouts/Layout";

const Pricing = () => {
  return (
    <Layout>
      <div className="pt-32">
        <h1 className="text-5xl text-gray-700 text-center leading-snug">
          Everything you need. <br /> Nothing you don't.
        </h1>
        <h1 className="text-xl tracking-wider text-gray-600 text-center my-10">
          Our bookkeeping and banking tools can be used separately or together{" "}
          <br /> for maximum control of your business finances.
        </h1>

        <div className="flex max-w-screen-lg lg:px-14 mx-auto gap-x-5 items-end">
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
            <button className=" bg-fuchsia-300 rounded-full py-3 px-8 text-lg font-semibold">
              Create your free account
            </button>
          </div>
        </div>

        <div className="flex w-96 items-center gap-x-3 mx-auto my-4">
          <div className="h-[1px] bg-blue-500 flex-1"></div>
          <p>or</p>
          <div className="h-[1px] bg-blue-500 flex-1"></div>
        </div>

        <div className="w-96 mx-auto">
          <button className="bg-blue-400 text-white rounded-full py-3 px-8 text-lg font-semibold w-full">
            Create your free account
          </button>
        </div>
        <div className="text-center text-lg my-5">
          By signing up, you are indicating that you have read and agree to the
          <span className="font-semibold"> Terms of Use</span> and
          <span className="font-semibold"> Privacy Policy.</span>
        </div>
      </div>

      <div className="h-screen bg-blue-900 mt-60">
        <div className="max-w-screen-lg mx-auto -translate-y-48 -mb-40 flex gap-x-8 justify-between">
          {data.map((item) => (
            <div
              key={item.id}
              className="shadow-sm rounded-xl p-10 bg-white flex-1 border border-black hover:bg-orange-100 hover:border-orange-500"
            >
              <div className="text-center h-80">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.sub_title}</p>
                <h5 className="text-5xl text-violet-500 mt-7 font-bold">$0</h5>
                <h6 className="text-xl font-semibold mb-5">100% free</h6>
                <p className="text-gray-500 underline">
                  See all Accountiong feature
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-screen-lg mx-auto">
          <div className="shadow-sm rounded p-10 bg-white grid gap-x-8 lg:grid-cols-3">
            <div>
              <h5>Add on</h5>
              <h3 className="text-2xl font-bold py-3">Recruitment (ATA)</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident blanditiis voluptates et, maiores rerum dolorem
                minima!
              </p>
            </div>

            <div className="border border-gray-200 rounded">
              <p className="border-b border-gray-200 p-3">
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
              <p className="border-b border-gray-200 p-3">
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
