import type { NextPage } from "next";

type LinkHamburgerNonBottomContType = {
  linkText?: string;
};

const LinkHamburgerNonBottomCont: NextPage<LinkHamburgerNonBottomContType> = ({
  linkText = "Link / Hamburger / Non-Bottom",
}) => {
  return (
    <div className="box-border flex flex-row items-center justify-center py-[50px] px-0 text-center text-21xl text-black font-body-large self-stretch border-b-[1px] border-solid border-black">
      <a className="[text-decoration:none] relative tracking-[0.5px] leading-[100%] font-medium text-[inherit] flex items-center justify-center w-[340px] shrink-0">
        {linkText}
      </a>
    </div>
  );
};

export default LinkHamburgerNonBottomCont;
