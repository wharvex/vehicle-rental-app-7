import type { NextPage } from "next";

type ButtonLargeSmallType = {
  buttonText?: string;
};

const ButtonLargeSmall: NextPage<ButtonLargeSmallType> = ({
  buttonText = "Text",
}) => {
  return (
    <div className="rounded-3xs box-border w-[308px] h-[118px] flex flex-col items-center justify-center text-center text-21xl text-black font-header-footer-button-small border-[2px] border-solid border-black">
      <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[100%] font-medium flex items-center justify-center">
        {buttonText}
      </div>
    </div>
  );
};

export default ButtonLargeSmall;
