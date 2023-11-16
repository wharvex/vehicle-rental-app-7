import type { NextPage } from "next";

type ButtonSmallSmallGreenType = {
  text?: string;
};

const ButtonSmallSmallGreen: NextPage<ButtonSmallSmallGreenType> = ({
  text = "Text",
}) => {
  return (
    <div className="rounded-3xs bg-lime box-border w-[214px] h-[82px] flex flex-col items-center justify-center text-center text-21xl text-black font-header-footer-button-small border-[2px] border-solid border-black">
      <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[100%] font-medium flex items-center justify-center">
        {text}
      </div>
    </div>
  );
};

export default ButtonSmallSmallGreen;
