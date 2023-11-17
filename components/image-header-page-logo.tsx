import type { NextPage } from "next";
import Link from "next/link";
import { useMemo, type CSSProperties } from "react";

type ImageHeaderPageLogoType = {
  image?: string;
};

const ImageHeaderPageLogo: NextPage<ImageHeaderPageLogoType> = ({ image }) => {
  return (
    <Link
      href="/"
      className="[text-decoration:none] flex flex-col items-center justify-center"
    >
      <img
        className="relative w-[150px] h-[105px] object-cover"
        alt=""
        src={image}
      />
    </Link>
  );
};

export default ImageHeaderPageLogo;
