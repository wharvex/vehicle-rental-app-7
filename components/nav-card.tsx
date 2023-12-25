import clsx from "clsx";
import NavCardTextContainer from "./nav-card-text-container";
import NavCardImageContainer from "./nav-card-image-container";

type NavCardProps = {
  imgSrc: string;
  text: string;
};

export default function NavCard(fn: NavCardProps) {
  const classStr = clsx(
    "box-border",
    // Use flex-1 to allow a flex item to grow and shrink as needed, ignoring its initial size
    "flex-1",
    "rounded-xl",
    "[background:linear-gradient(180deg,_#e5aeff,_rgba(255,_174,_174,_0))]",
    "overflow-hidden",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "p-[50px]",
    "gap-[50px]",
    "border-[1px]",
    "border-solid",
    "border-black"
  );
  return (
    <div className={classStr}>
      <NavCardImageContainer imgSrc={fn.imgSrc} />
      <NavCardTextContainer text={fn.text} />
    </div>
  );
}
