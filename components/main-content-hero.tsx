import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import BodyHero from "./body-hero";

type MainContentHeroType = {
  /** Style props */
  mainContentHeroFlexShrink?: CSSProperties["flexShrink"];
  bodyHeroBoxSizing?: CSSProperties["boxSizing"];
  bodyHeroBoxSizing1?: CSSProperties["boxSizing"];
  bodyHeroBoxSizing2?: CSSProperties["boxSizing"];
  bodyHeroBoxSizing3?: CSSProperties["boxSizing"];
};

const MainContentHero: NextPage<MainContentHeroType> = ({
  mainContentHeroFlexShrink,
  bodyHeroBoxSizing,
  bodyHeroBoxSizing1,
  bodyHeroBoxSizing2,
  bodyHeroBoxSizing3,
}) => {
  const mainContentHeroStyle: CSSProperties = useMemo(() => {
    return {
      flexShrink: mainContentHeroFlexShrink,
    };
  }, [mainContentHeroFlexShrink]);

  const iconRadioChoiceUnselectStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: bodyHeroBoxSizing,
    };
  }, [bodyHeroBoxSizing]);

  const iconRadioChoiceUnselectStyle1: CSSProperties = useMemo(() => {
    return {
      boxSizing: bodyHeroBoxSizing1,
    };
  }, [bodyHeroBoxSizing1]);

  const iconRadioChoiceUnselectStyle2: CSSProperties = useMemo(() => {
    return {
      boxSizing: bodyHeroBoxSizing2,
    };
  }, [bodyHeroBoxSizing2]);

  const iconRadioChoiceUnselectStyle3: CSSProperties = useMemo(() => {
    return {
      boxSizing: bodyHeroBoxSizing3,
    };
  }, [bodyHeroBoxSizing3]);

  return (
    <div
      className="w-[1440px] h-[550px] overflow-hidden flex flex-row items-center justify-center py-[100px] px-2.5 box-border bg-[url('/maincontent--hero@3x.png')] bg-cover bg-no-repeat bg-[top]"
      style={mainContentHeroStyle}
    >
      <BodyHero
        bodyHeroFlexShrink="0"
        containerHeroBodyHeaderBoxSizing="border-box"
        containerHeroBodyHeaderBoxSizing1="border-box"
        containerHeroBodyHeaderBoxSizing2="border-box"
        containerHeroBodyHeaderBoxSizing3="border-box"
      />
    </div>
  );
};

export default MainContentHero;
