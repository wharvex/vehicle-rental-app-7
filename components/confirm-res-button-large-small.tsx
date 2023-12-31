import { TextProps } from "@/models/misc";
import clsx from "clsx";

export default function ButtonLargeSmall(fn: TextProps) {
  const classStrOuter = clsx(
    "rounded-3xs",
    "box-border",
    "w-[308px]",
    "h-[118px]",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "text-center",
    "text-21xl",
    "text-black",
    "font-header-footer-button-small",
    "border-[2px]",
    "border-solid",
    "border-black"
  );
  const classStrInner = clsx(
    "self-stretch",
    "flex-1",
    "relative",
    "tracking-[0.5px]",
    "leading-[100%]",
    "font-medium",
    "flex",
    "items-center",
    "justify-center"
  );
  return (
    <div className={classStrOuter}>
      <div className={classStrInner}>{fn.text}</div>
    </div>
  );
}
