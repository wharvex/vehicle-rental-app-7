import ContainerHeroBodyHeader from "./container-hero-body-header";
import ContainerRadioChoiceMenu from "./container-radio-choice-menu";

export default function BodyHero() {
  return (
    <div className="rounded-xl [&_*]:shrink-0 bg-white w-[1000px] h-[350px] overflow-hidden flex flex-row items-center justify-center py-[25px] px-[50px] box-border gap-[75px]">
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
