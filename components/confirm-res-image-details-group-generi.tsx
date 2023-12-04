import type { NextPage } from "next";

type ImageDetailsGroupGeneriType = {
  imageDimensions?: string;
};

const ImageDetailsGroupGeneri: NextPage<ImageDetailsGroupGeneriType> = ({
  imageDimensions,
}) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <img
        className="relative w-[234px] h-32 object-cover"
        alt=""
        src={imageDimensions}
      />
    </div>
  );
};

export default ImageDetailsGroupGeneri;
