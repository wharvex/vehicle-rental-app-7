import clsx from "clsx";
import HomepageHeroTitlesContainer from "./homepage-hero-titles-container";
import HomepageHeroRadiosContainer from "./homepage-hero-radios-container";

export default function HomepageHero() {
  const divClassStr = clsx(
    "rounded-xl",
    "[&_*]:shrink-0",
    "bg-white",
    "w-[1000px]",
    "h-[350px]",
    "overflow-hidden",
    "flex",
    "flex-row",
    "items-center",
    "justify-center",
    "py-[25px]",
    "px-[50px]",
    "box-border",
    "gap-[75px]"
  );
  return (
    <div className={divClassStr}>
      <HomepageHeroTitlesContainer />
      <HomepageHeroRadiosContainer />
    </div>
  );
}
