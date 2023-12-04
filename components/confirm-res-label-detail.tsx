type LabelDetailType = {
  detailLabelText?: string;
};

export default function LabelDetail(fn: LabelDetailType) {
  return (
    <div className="flex flex-row items-start justify-start py-2.5 px-0 text-center text-11xl text-black font-body-large border-b-[2px] border-solid border-black">
      <div className="relative tracking-[0.5px] leading-[100%] font-medium">
        {fn.detailLabelText}
      </div>
    </div>
  );
}
