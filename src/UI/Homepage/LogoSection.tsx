import Image from "next/image";

const LogoSection = () => {
  return (
    <div className=" bg-black flex justify-between py-4 px-5 rounded-lg shadow-sm">
      {[1, 2, 3, 4, 5, 6].map((v) => (
        <div key={v}>
          <Image src={`/images/${v}.svg`} width={100} height={100} />
        </div>
      ))}
      <div className=" flex flex-col text-white mt-7">
        <h3 className=" text-3xl font-bold">2000+</h3>
        <p>components</p>
      </div>
    </div>
  );
};

export default LogoSection;
