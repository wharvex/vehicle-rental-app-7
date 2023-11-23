import type { NextPage } from "next";

type DetailLabelCarCardType = {
  text: string;
};

const DetailLabelCarCard: NextPage<DetailLabelCarCardType> = ({
  text,
}) => {
  return (
    <div className="flex flex-row items-center justify-center text-center text-11xl text-black font-body-large">
      <div className="relative tracking-[0.5px] leading-[100%] font-medium italic">
        {text}
      </div>
    </div>
  );
};

export default DetailLabelCarCard;
