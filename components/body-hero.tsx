import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ContainerHeroBodyHeader from "./container-hero-body-header";
import ContainerRadioChoiceMenu from "./container-radio-choice-menu";

type BodyHeroType = {
  /** Style props */
  bodyHeroFlexShrink?: CSSProperties["flexShrink"];
  containerHeroBodyHeaderBoxSizing?: CSSProperties["boxSizing"];
  containerHeroBodyHeaderBoxSizing1?: CSSProperties["boxSizing"];
  containerHeroBodyHeaderBoxSizing2?: CSSProperties["boxSizing"];
  containerHeroBodyHeaderBoxSizing3?: CSSProperties["boxSizing"];
};

const BodyHero: NextPage<BodyHeroType> = ({
  bodyHeroFlexShrink,
  containerHeroBodyHeaderBoxSizing,
  containerHeroBodyHeaderBoxSizing1,
  containerHeroBodyHeaderBoxSizing2,
  containerHeroBodyHeaderBoxSizing3,
}) => {
  const bodyHeroStyle: CSSProperties = useMemo(() => {
    return {
      flexShrink: bodyHeroFlexShrink,
    };
  }, [bodyHeroFlexShrink]);

  const iconRadioChoiceUnselectStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: containerHeroBodyHeaderBoxSizing,
    };
  }, [containerHeroBodyHeaderBoxSizing]);

  const iconRadioChoiceUnselectStyle1: CSSProperties = useMemo(() => {
    return {
      boxSizing: containerHeroBodyHeaderBoxSizing1,
    };
  }, [containerHeroBodyHeaderBoxSizing1]);

  const iconRadioChoiceUnselectStyle2: CSSProperties = useMemo(() => {
    return {
      boxSizing: containerHeroBodyHeaderBoxSizing2,
    };
  }, [containerHeroBodyHeaderBoxSizing2]);

  const iconRadioChoiceUnselectStyle3: CSSProperties = useMemo(() => {
    return {
      boxSizing: containerHeroBodyHeaderBoxSizing3,
    };
  }, [containerHeroBodyHeaderBoxSizing3]);

  return (
    <div
      className="rounded-xl bg-white w-[1000px] h-[350px] overflow-hidden flex flex-row items-center justify-center py-[25px] px-[50px] box-border gap-[75px]"
      style={bodyHeroStyle}
    >
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
};

export default BodyHero;
