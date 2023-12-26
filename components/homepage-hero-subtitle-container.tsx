import { TextProps } from "@/models/misc";
import clsx from "clsx";

export default function HomepageHeroSubtitleContainer(fn: TextProps) {
  const divClassStr = clsx(
    "w-[500px]",
    "flex",
    "flex-row",
    "items-start",
    "justify-start",
    "text-left",
    "text-21xl"
  );
  const iClassStr = clsx(
    "relative",
    "tracking-[0.5px]",
    "leading-[100%]",
    "flex",
    "items-center",
    "w-[500px]",
    "shrink-0"
  );
  return (
    <div className={divClassStr}>
      <i className={iClassStr}>{fn.text}</i>
    </div>
  );
}
