import type { NextPage } from "next";

type LinkRegularMediumContainerType = {
  linkText?: string;
};

const LinkRegularMediumContainer: NextPage<LinkRegularMediumContainerType> = ({
  linkText = "Link / Regular/Medium",
}) => {
  return (
    <div className="flex flex-row items-center justify-center p-2.5 text-center text-21xl text-black font-body-large">
      <a className="[text-decoration:none] relative tracking-[0.5px] leading-[100%] font-medium text-[inherit]">
        {linkText}
      </a>
    </div>
  );
};

export default LinkRegularMediumContainer;
