import type { NextPage } from "next";
import { useMemo, type CSSProperties, MouseEventHandler } from "react";

type ImageHeaderPageHamgurgeType = {
  image?: string;
  onClick: MouseEventHandler;

  /** Style props */
  imageHeaderPageHamgurgeBoxSizing?: CSSProperties["boxSizing"];
};

const ImageHeaderPageHamgurge: NextPage<ImageHeaderPageHamgurgeType> = ({
  image,
  onClick,
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
        onClick={onClick}
      />
    </div>
  );
};

export default ImageHeaderPageHamgurge;
