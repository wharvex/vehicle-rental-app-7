import type { NextPage } from "next";

type SubHeaderHeroBodyType = {
  text?: string;
};

const SubHeaderHeroBody: NextPage<SubHeaderHeroBodyType> = ({
  text = "Choose a Pickup/Dropoff Location",
}) => {
  return (
    <div className="w-[500px] flex flex-row items-start justify-start text-left text-21xl text-black font-body-large">
      <i className="relative tracking-[0.5px] leading-[100%] flex items-center w-[500px] shrink-0">
        {text}
      </i>
    </div>
  );
};

export default SubHeaderHeroBody;
