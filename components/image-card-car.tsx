import type { NextPage } from "next";

const ImageCardCar: NextPage = () => {
  return (
    <div className="flex flex-row items-start justify-start">
      <img
        className="relative w-[100px] h-[100px] object-cover"
        alt=""
        src="/carsportoutline-1@2x.png"
      />
    </div>
  );
};

export default ImageCardCar;
