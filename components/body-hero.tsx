import clsx from "clsx";
import ContainerHeroBodyHeader from "./container-hero-body-header";
import ContainerRadioChoiceMenu from "./container-radio-choice-menu";

export default function BodyHero() {
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
      <ContainerHeroBodyHeader />
      <ContainerRadioChoiceMenu
        containerRadioChoiceMenuBoxSizing="border-box"
        menuRadioChoicesBoxSizing="border-box"
        menuRadioChoicesBoxSizing1="border-box"
        menuRadioChoicesBoxSizing2="border-box"
        menuRadioChoicesBoxSizing3="border-box"
      />
    </div>
  );
}
