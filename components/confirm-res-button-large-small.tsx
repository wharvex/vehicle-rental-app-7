import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ButtonLargeSmallType = {
  buttonText?: string;

  /** Style props */
  buttonLargeSmallCursor?: CSSProperties["cursor"];
  buttonLargeSmallPadding?: CSSProperties["padding"];
  buttonLargeSmallBackgroundColor?: CSSProperties["backgroundColor"];
};

const ButtonLargeSmall: NextPage<ButtonLargeSmallType> = ({
  buttonText = "Text",
  buttonLargeSmallCursor,
  buttonLargeSmallPadding,
  buttonLargeSmallBackgroundColor,
}) => {
  const buttonLargeSmallStyle: CSSProperties = useMemo(() => {
    return {
      cursor: buttonLargeSmallCursor,
      padding: buttonLargeSmallPadding,
      backgroundColor: buttonLargeSmallBackgroundColor,
    };
  }, [
    buttonLargeSmallCursor,
    buttonLargeSmallPadding,
    buttonLargeSmallBackgroundColor,
  ]);

  return (
    <div
      className="rounded-3xs box-border w-[308px] h-[118px] flex flex-col items-center justify-center text-center text-21xl text-black font-header-footer-button-small border-[2px] border-solid border-black"
      style={buttonLargeSmallStyle}
    >
      <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[100%] font-medium flex items-center justify-center">
        {buttonText}
      </div>
    </div>
  );
};

export default ButtonLargeSmall;
