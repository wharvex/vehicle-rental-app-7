import type { NextPage } from "next";

type HeaderDetailsGroupType = {
  headerText?: string;
};

const HeaderDetailsGroup: NextPage<HeaderDetailsGroupType> = ({
  headerText = "Something Choice",
}) => {
  return (
    <div className="flex flex-row items-start justify-start text-center text-21xl text-black font-body-extra-large-heading self-stretch">
      <div className="relative tracking-[0.5px] leading-[100%] font-medium">
        {headerText}
      </div>
    </div>
  );
};

export default HeaderDetailsGroup;
