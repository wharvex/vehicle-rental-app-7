import clsx from "clsx";
import HomepageHero from "./homepage-hero";

export default function MainContentHero() {
  const classStr = clsx(
    "w-full",
    "h-[550px]",
    "overflow-hidden",
    "flex",
    "flex-row",
    "items-center",
    "justify-center",
    "py-[100px]",
    "px-2.5",
    "box-border",
    "bg-[url('/maincontent--hero@3x.png')]",
    "bg-cover",
    "bg-no-repeat",
    "bg-[top]",
    "shrink-0"
  );

  return (
    <div className={classStr}>
      <HomepageHero />
    </div>
  );
}
