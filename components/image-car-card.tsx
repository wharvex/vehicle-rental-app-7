import type { NextPage } from "next";
import Image from "next/image";

type ImageCarCardType = {
  image1?: string;
};

const ImageCarCard: NextPage<ImageCarCardType> = ({ image1 }) => {
  return (
    <div className="w-[500px] h-[324px] flex flex-col items-center justify-start p-2.5 box-border overflow-hidden">
      <Image
        width={450}
        height={324}
        className="w-[450px] h-[324px] object-cover border-solid border-2 border-black overflow-hidden"
        src={image1 || ""}
        alt=""
      />
    </div>
  );
};

export default ImageCarCard;
