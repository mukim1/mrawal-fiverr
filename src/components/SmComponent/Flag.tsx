import Image from "next/image";

const Flag = () => {
  return (
    <div className="flex gap-3 ">
      {[1, 2, 3, 4].map((v) => (
        // eslint-disable-next-line react/jsx-key

        <Image
          key={v}
          src={`/images/MyotaCardImg/${v}.svg`}
          width={25}
          height={25}
          alt=""
        />
      ))}
    </div>
  );
};

export default Flag;
