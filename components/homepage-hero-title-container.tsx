import { TextProps } from "@/models/misc";

export default function HomepageHeroTitleContainer(fn: TextProps) {
  return (
    <div className="flex flex-row items-start justify-start">
      <div className="relative tracking-[0.5px] leading-[100%] font-medium">
        {fn.text}
      </div>
    </div>
  );
}
