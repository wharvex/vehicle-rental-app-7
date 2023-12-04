import type { NextPage } from "next";

type DetailsGroupHeaderProps = {
  headerText?: string;
};

export default function DetailsGroupHeader(fn: DetailsGroupHeaderProps) {
  return (
    <div className="flex flex-row items-start justify-start text-center text-21xl text-black font-body-large self-stretch">
      <div className="relative tracking-[0.5px] leading-[100%] font-medium">
        {fn.headerText}
      </div>
    </div>
  );
}
