import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ImageHeaderPageHamgurgeType = {
  image?: string;

  /** Style props */
  imageHeaderPageHamgurgeBoxSizing?: CSSProperties["boxSizing"];
};

const ImageHeaderPageHamgurge: NextPage<ImageHeaderPageHamgurgeType> = ({
  image,
  imageHeaderPageHamgurgeBoxSizing,
}) => {
  const imageHeaderPageHamgurgeStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: imageHeaderPageHamgurgeBoxSizing,
    };
  }, [imageHeaderPageHamgurgeBoxSizing]);

  return (
    <div
      className="flex flex-col items-start justify-start p-2.5"
      style={imageHeaderPageHamgurgeStyle}
    >
      <img
        className="relative w-[60px] h-[42px] object-cover"
        alt=""
        src={image}
      />
    </div>
  );
};

export default ImageHeaderPageHamgurge;
