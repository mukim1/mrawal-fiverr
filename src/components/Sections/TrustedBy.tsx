import React from "react";
import Card1 from "../Cards/Card1";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Title from "../Texts";
import MyotaCard from "../MyotaCard";
import Flag from "../SmComponent/Flag";

const TrustedBy = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between">
        <Title cls="lg:w-2/5">Trusted by thousands of market leaders</Title>
        <div className="flex items-center gap-2 text-blue-700 hover:underline">
          <Link href="#">
            <a className="text-xl capitalize ">see all case studies</a>
          </Link>
          <AiOutlineArrowRight />
        </div>
      </div>
      <MyotaCard />

      <div className="grid grid-cols-2 my-10 text-lg gap-x-5">
        <Card1>
          <div className="">
            <div className="flex justify-between mb-10">
              <Image
                src={`/images/MyotaCardImg/1a.svg`}
                alt=""
                width={150}
                height={50}
              />
              <div>
                <Flag />
              </div>
            </div>
            <p>
              Lano has revolutionized the way we work with our contractors. The
              platform is exceptionally intuitive and easy to use – both for our
              employees and contractors.
            </p>

            <div className="flex items-center mt-5 gap-x-10">
              <div>
                <Image
                  className="rounded-full "
                  src={`/images/MyotaCardImg/man1.jpg`}
                  width={70}
                  height={70}
                  alt=""
                />
              </div>
              <div>
                <p className="text-xl ">David Rheinbay</p>
                <p className=" text-[16px] text-[#748095]">
                  Co-founder & CPO at BEAT81
                </p>
              </div>
            </div>
          </div>
        </Card1>
        <Card1>
          <div className="">
            <div className="flex justify-between mb-10">
              <Image
                src={`/images/MyotaCardImg/2b.svg`}
                alt=""
                width={150}
                height={50}
              />
              <div>
                <Flag />
              </div>
            </div>
            <p className="italic ">
              “Given that it was the first time for us hiring remotely, it was
              really nice to have that kind of support. Without speedy and
              simple process, we probably would have lost the candidate.”
            </p>
            <div className="flex items-center mt-5 gap-x-10">
              <div>
                <Image
                  className="rounded-full "
                  src={`/images/MyotaCardImg/man2.jpg`}
                  width={70}
                  height={70}
                  alt=""
                />
              </div>
              <div>
                <p className="text-xl ">Marcel Relitz</p>
                <p className=" text-[16px] text-[#748095]">
                  Unit Manager at Zuumeo
                </p>
              </div>
            </div>
          </div>
        </Card1>
      </div>
    </React.Fragment>
  );
};

export default TrustedBy;
