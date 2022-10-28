import { IoIosRocket } from "react-icons/io";
import { data } from "../../data/WhyChooiseCard";

const SmCard = () => {
  return (
    <>
      {data.map((v, index) => (
        <div
          key={index}
          className=" w-[300px] h-[180px] border border-gray-300 rounded bg-[#1C1A51] py-8"
        >
          <div className="flex justify-center text-[#1ADBAD] ">{v.icon}</div>
          <div className="flex justify-center mt-5">
            <p className="w-3/5">{v.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SmCard;
