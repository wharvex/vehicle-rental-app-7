import type { NextPage } from "next";

type DetailsGroupContainerHeaderProps = {
  text: string;
};

export default function DetailsGroupContainerHeader(
  fn: DetailsGroupContainerHeaderProps
) {
  return (
    <div className="flex flex-row items-center justify-center pt-[100px] px-0 pb-[25px] box-border text-center text-36xl text-black self-stretch font-body-large">
      <h1 className="m-0 relative text-inherit tracking-[0.5px] leading-[100%] italic font-semibold font-inherit">
        {fn.text}
      </h1>
    </div>
  );
}
