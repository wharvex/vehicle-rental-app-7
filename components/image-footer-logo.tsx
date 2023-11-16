import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ImageFooterLogoType = {
  /** Style props */
  imageFooterLogoPosition?: CSSProperties["position"];
  imageFooterLogoFlexShrink?: CSSProperties["flexShrink"];
};

const ImageFooterLogo: NextPage<ImageFooterLogoType> = ({
  imageFooterLogoPosition,
  imageFooterLogoFlexShrink,
}) => {
  const imageFooterLogoStyle: CSSProperties = useMemo(() => {
    return {
      position: imageFooterLogoPosition,
      flexShrink: imageFooterLogoFlexShrink,
    };
  }, [imageFooterLogoPosition, imageFooterLogoFlexShrink]);

  return (
    <div
      className="w-[105px] h-[105px] overflow-hidden text-center text-3xs text-black font-red-hat-mono"
      style={imageFooterLogoStyle}
    >
      <img
        className="absolute h-[98.29%] w-[77.9%] top-[0%] right-[9.62%] bottom-[1.71%] left-[12.48%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute h-[26.67%] w-[70.48%] top-[52.38%] left-[16.19%] tracking-[0.5px] leading-[100%] font-medium flex items-center justify-center">
        :thumbsup: design
      </div>
    </div>
  );
};

export default ImageFooterLogo;
