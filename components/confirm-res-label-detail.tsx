import type { NextPage } from "next";

type LabelDetailType = {
  detailLabelText?: string;
};

const LabelDetail: NextPage<LabelDetailType> = ({
  detailLabelText = "Label",
}) => {
  return (
    <div className="flex flex-row items-start justify-start py-2.5 px-0 text-center text-17xl text-black font-body-extra-large-heading border-b-[2px] border-solid border-black">
      <div className="relative tracking-[0.5px] leading-[100%] font-medium">
        {detailLabelText}
      </div>
    </div>
  );
};

export default LabelDetail;
