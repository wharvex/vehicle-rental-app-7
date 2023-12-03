import type { NextPage } from "next";

type ValueDetailType = {
  detailValueText?: string;
};

export default function ValueDetail(fn: ValueDetailType) {
  return (
    <div className="flex flex-row items-start justify-start py-2.5 px-0 text-left text-6xl text-black font-body-large">
      <div className="relative tracking-[0.5px] leading-[100%] font-medium">
        {fn.detailValueText}
      </div>
    </div>
  );
}
