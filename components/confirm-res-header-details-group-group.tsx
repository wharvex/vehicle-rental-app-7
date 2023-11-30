import type { NextPage } from "next";

type HeaderDetailsGroupGroupType = {
  text?: string;
};

const HeaderDetailsGroupGroup: NextPage<HeaderDetailsGroupGroupType> = ({
  text = "Something Details",
}) => {
  return (
    <div className="flex flex-row items-center justify-center pt-[100px] px-0 pb-[25px] box-border text-center text-45xl text-black font-body-extra-large-heading self-stretch">
      <h1 className="m-0 relative text-inherit tracking-[0.5px] leading-[100%] italic font-medium font-inherit">
        {text}
      </h1>
    </div>
  );
};

export default HeaderDetailsGroupGroup;
