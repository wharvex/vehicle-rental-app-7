import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ImageHeaderPageLogoType = {
  image?: string;

  /** Style props */
  imageHeaderPageLogoCursor?: CSSProperties["cursor"];

  /** Action props */
  onImageHeaderPageLogoClick?: () => void;
};

const ImageHeaderPageLogo: NextPage<ImageHeaderPageLogoType> = ({
  image,
  imageHeaderPageLogoCursor,
  onImageHeaderPageLogoClick,
}) => {
  const imageHeaderPageLogoStyle: CSSProperties = useMemo(() => {
    return {
      cursor: imageHeaderPageLogoCursor,
    };
  }, [imageHeaderPageLogoCursor]);

  return (
    <a
      className="[text-decoration:none] flex flex-col items-center justify-center"
      style={imageHeaderPageLogoStyle}
      onClick={onImageHeaderPageLogoClick}
    >
      <img
        className="relative w-[150px] h-[105px] object-cover"
        alt=""
        src={image}
      />
    </a>
  );
};

export default ImageHeaderPageLogo;
