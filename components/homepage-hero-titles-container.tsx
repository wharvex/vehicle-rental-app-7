import clsx from "clsx";
import HomepageHeroSubtitleContainer from "./homepage-hero-subtitle-container";
import HomepageHeroTitleContainer from "./homepage-hero-title-container";

export default function HomepageHeroTitlesContainer() {
  const classStr = clsx(
    "bg-white",
    "overflow-hidden",
    "flex",
    "flex-col",
    "items-start",
    "justify-start",
    "p-2.5",
    "gap-[60px]",
    "text-center",
    "text-36xl",
    "text-black",
    "font-body-large"
  );
  return (
    <div className={classStr}>
      <HomepageHeroTitleContainer text="Reserve a Vehicle" />
      <HomepageHeroSubtitleContainer text="Choose a Pickup/Dropoff Location" />
    </div>
  );
}
