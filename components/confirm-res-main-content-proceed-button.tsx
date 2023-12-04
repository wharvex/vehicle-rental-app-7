import type { NextPage } from "next";
import ButtonLargeSmall from "./confirm-res-button-large-small";

const MainContentProceedButton: NextPage = () => {
  return (
    <div className="w-[1160px] flex flex-row items-start justify-center py-[50px] px-0 box-border gap-[75px]">
      <ButtonLargeSmall
        buttonText="Back to Browse"
        buttonLargeSmallCursor="unset"
        buttonLargeSmallPadding="unset"
        buttonLargeSmallBackgroundColor="unset"
      />
      <ButtonLargeSmall
        buttonText="Proceed to Payment"
        buttonLargeSmallCursor="pointer"
        buttonLargeSmallPadding="0"
        buttonLargeSmallBackgroundColor="transparent"
      />
    </div>
  );
};

export default MainContentProceedButton;
