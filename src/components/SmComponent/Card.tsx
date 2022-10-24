import Image from "next/image";

const Card = () => {
  const a = 11;
  return (
    <div className="w-[300px] rounded-xl bg-blue-600 flex flex-col h-[350px] justify-start p-5">
      <Image src={`/images/${a}.svg`} width={50} height={50} />
      <h3 className=" text-2xl my-2 font-bold leading-[38px] text-white">
        first-track international expansion
      </h3>
      <p className=" text-lg text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione
        tenetur eveniet!
      </p>
    </div>
  );
};

export default Card;
