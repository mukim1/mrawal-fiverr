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

      <div className="h-screen bg-blue-900 mt-40">
        <div className="max-w-screen-lg mx-auto -translate-y-20 flex gap-x-5">
          <Card1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              voluptates corporis ratione velit quidem blanditiis, non corrupti
              ab explicabo tenetur quis reiciendis inventore, quasi magnam.
              Cumque eveniet nobis deleniti quae.
            </p>
          </Card1>
          <Card1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              voluptates corporis ratione velit quidem blanditiis, non corrupti
              ab explicabo tenetur quis reiciendis inventore, quasi magnam.
              Cumque eveniet nobis deleniti quae.
            </p>
          </Card1>
          <Card1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              voluptates corporis ratione velit quidem blanditiis, non corrupti
              ab explicabo tenetur quis reiciendis inventore, quasi magnam.
              Cumque eveniet nobis deleniti quae.
            </p>
          </Card1>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
