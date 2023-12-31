import clsx from "clsx";
import ButtonLargeSmall from "./confirm-res-button-large-small";

export default function MainContentProceedButtonsContainer() {
  const classStr = clsx(
    "w-[1160px]",
    "flex",
    "flex-row",
    "items-start",
    "justify-center",
    "py-[50px]",
    "px-0",
    "box-border",
    "gap-[75px]"
  );
  return (
    <div className={classStr}>
      <ButtonLargeSmall text="Back to Browse" />
      <ButtonLargeSmall text="Proceed to Payment" />
    </div>
  );
}
