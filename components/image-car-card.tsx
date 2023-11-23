import type { NextPage } from "next";

type ImageCarCardType = {
  image1?: string;
};

const ImageCarCard: NextPage<ImageCarCardType> = ({ image1 }) => {
  return (
    <div className="w-[500px] h-[324px] flex flex-col items-start justify-start p-2.5 box-border">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image1}
      />
    </div>
  );
};

export default ImageCarCard;
