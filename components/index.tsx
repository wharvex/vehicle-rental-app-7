import type { NextPage } from "next";

type ButtonSmallSmallType = {
  buttonText?: string;
};

const ButtonSmallSmall: NextPage<ButtonSmallSmallType> = ({
  buttonText = "Text",
}) => {
  return (
    <div className="rounded-3xs box-border w-[214px] h-[82px] flex flex-col items-center justify-center text-center text-21xl text-black font-header-footer-button-small border-[2px] border-solid border-black">
      <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[100%] font-medium flex items-center justify-center">
        {buttonText}
      </div>
    </div>
  );
};

export default ButtonSmallSmall;
