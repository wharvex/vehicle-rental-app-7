import { TextProps } from "@/models/misc";
import clsx from "clsx";

export default function BreadcrumbLabel(fn: TextProps) {
  const classStr = clsx(
    "w-[170px]",
    "flex",
    "flex-row",
    "items-center",
    "justify-center",
    "pt-2.5",
    "px-0",
    "box-border",
    "text-center",
    "text-5xl",
    "text-black",
    "font-body-large",
    "flex-1"
  );
  return (
    <div className={classStr}>
      <div className="flex-1 relative tracking-[0.5px] leading-[100%] font-medium">
        {fn.text}
      </div>
    </div>
  );
}
