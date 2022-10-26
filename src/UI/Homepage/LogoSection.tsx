import Image from "next/image";

const LogoSection = ({ num, text }: any) => {
  return (
    <div className="flex justify-between px-5 py-4 bg-black rounded-lg shadow-sm ">
      {[1, 2, 3, 4, 5, 6].map((v) => (
        <div key={v}>
          <Image src={`/images/${v}.svg`} width={100} height={100} alt="" />
        </div>
      ))}
      <div className="flex flex-col text-white  mt-7">
        <h3 className="text-3xl font-bold ">{num}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default LogoSection;
