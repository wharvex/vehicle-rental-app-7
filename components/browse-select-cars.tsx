import type { NextPage } from "next";
import Link from "next/link";
import { useMemo, type CSSProperties } from "react";

type SelectCarsTitle = {
  text?: string;

  /** Style props */
  selectCarsBackground?: CSSProperties["background"];
};

const SelectCars: NextPage<SelectCarsTitle> = ({
  text = "Results",
  selectCarsBackground,
}) => {
  const selectCarsStyle: CSSProperties = useMemo(() => {
    return {
      background: selectCarsBackground,
    };
  }, [selectCarsBackground]);

  return (
    <div
      className="flex flex-row items-center justify-center pt-0 px-[100px] pb-[70px] box-border text-center text-36xl text-black font-body-large self-stretch flex-1"
      style={selectCarsStyle}
    >
        <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-center text-9xl text-black font-reg-heading">
          <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
            <ul className="flex flex-col items-center justify-start gap-[10px] list-none">
              <li className="text-sm">Step 1: Choose lots</li>
            {/* </div> */}
            {/* <div className="flex flex-col items-center justify-start gap-[10px] text-24xl"> */}
              <li>Step 2: Enter dates</li>
            {/* </div> */}
            {/* <div className="flex flex-col items-center justify-start gap-[10px] text-24xl"> */}
              <li>Step 3: View vehicles</li>
            </ul>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[75px] text-24xl">
            <div className="self-stretch flex flex-row items-center justify-center pt-[100px] px-0 pb-[25px] text-45xl">
              <h1 className="m-0 relative text-inherit tracking-[0.5px] leading-[100%] italic font-medium font-inherit">
                Results
              </h1>
            </div>
              <Link href="../browse_select_cars"
                className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
              >
                    <div className="box-border w-[214px] h-[82px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
                    <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                        Continue
                    </div>
                    </div>
              </Link>
              <Link href="/"
                className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
              >
                <div className="box-border w-[314px] h-[82px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
                    <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                        Back to Home
                    </div>
                </div>
              </Link>
          </div>
        </div>
    </div>
  );
};

export default SelectCars;