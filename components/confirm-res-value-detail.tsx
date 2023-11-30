import type { NextPage } from "next";

type ValueDetailType = {
  detailValueText?: string;
};

const ValueDetail: NextPage<ValueDetailType> = ({
  detailValueText = "Value",
}) => {
  return (
    <div className="flex flex-row items-start justify-start py-2.5 px-0 text-left text-11xl text-black font-body-extra-large-heading">
      <div className="relative tracking-[0.5px] leading-[100%] font-medium">
        {detailValueText}
      </div>
    </div>
  );
};

export default ValueDetail;
