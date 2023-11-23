import type { NextPage } from "next";
import DetailLabelCarCard from "./detail-label-car-card";
import DetailValueCarCard from "./detail-value-car-card";

type DetailCarCardType = {
  labelText: string;
  valueText: string;
};

const DetailCarCard: NextPage<DetailCarCardType> = ({
  labelText,
  valueText,
}) => {
  return (
    <div className="flex flex-row items-start justify-start p-2.5 gap-[16px] text-center text-17xl text-black font-body-small">
      <DetailLabelCarCard text={labelText} />
      <DetailValueCarCard text={valueText} />
    </div>
  );
};

export default DetailCarCard;
