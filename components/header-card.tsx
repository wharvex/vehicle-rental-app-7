import type { NextPage } from "next";

type HeaderCardType = {
  text?: string;
};

const HeaderCard: NextPage<HeaderCardType> = ({
  text = "Read Testimonials",
}) => {
  return (
    <div className="flex flex-row items-center justify-center p-2.5 text-center text-21xl text-black font-body-large">
      <div className="relative tracking-[0.5px] leading-[100%] font-medium inline-block w-[250px] shrink-0">
        {text}
      </div>
    </div>
  );
};

export default HeaderCard;
