import type { NextPage } from "next";

type DetailLabelCarCardType = {
  text: string;
};

const DetailLabelCarCard: NextPage<DetailLabelCarCardType> = ({
  text,
}) => {
  return (
    <div className="flex flex-row items-center justify-center text-center text-17xl text-black font-body-small">
      <div className="relative tracking-[0.5px] leading-[100%] font-medium">
        {text}
      </div>
    </div>
  );
};

export default DetailLabelCarCard;
