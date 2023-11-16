import type { NextPage } from "next";

type HeaderHeroBodyType = {
  text?: string;
};

const HeaderHeroBody: NextPage<HeaderHeroBodyType> = ({
  text = "Reserve a Vehicle",
}) => {
  return (
    <div className="flex flex-row items-start justify-start text-center text-36xl text-black font-body-large">
      <div className="relative tracking-[0.5px] leading-[100%] font-medium">
        {text}
      </div>
    </div>
  );
};

export default HeaderHeroBody;
