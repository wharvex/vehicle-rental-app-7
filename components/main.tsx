import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import MainContentHero from "./main-content-hero";
import MainContentCardsGroup from "./main-content-cards-group";
import MainContentGeneric from "./main-content-generic";

type MainType = {
  /** Style props */
  mainContentHeroBoxSizing?: CSSProperties["boxSizing"];
  mainContentHeroBoxSizing1?: CSSProperties["boxSizing"];
  mainContentHeroBoxSizing2?: CSSProperties["boxSizing"];
  mainContentHeroBoxSizing3?: CSSProperties["boxSizing"];
};

const Main: NextPage<MainType> = ({
  mainContentHeroBoxSizing,
  mainContentHeroBoxSizing1,
  mainContentHeroBoxSizing2,
  mainContentHeroBoxSizing3,
}) => {
  const iconRadioChoiceUnselectStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: mainContentHeroBoxSizing,
    };
  }, [mainContentHeroBoxSizing]);

  const iconRadioChoiceUnselectStyle1: CSSProperties = useMemo(() => {
    return {
      boxSizing: mainContentHeroBoxSizing1,
    };
  }, [mainContentHeroBoxSizing1]);

  const iconRadioChoiceUnselectStyle2: CSSProperties = useMemo(() => {
    return {
      boxSizing: mainContentHeroBoxSizing2,
    };
  }, [mainContentHeroBoxSizing2]);

  const iconRadioChoiceUnselectStyle3: CSSProperties = useMemo(() => {
    return {
      boxSizing: mainContentHeroBoxSizing3,
    };
  }, [mainContentHeroBoxSizing3]);

  return (
    <main className="bg-aliceblue flex flex-col items-center justify-start gap-[20px] self-stretch flex-1">
      <MainContentHero
        mainContentHeroFlexShrink="0"
        bodyHeroBoxSizing="border-box"
        bodyHeroBoxSizing1="border-box"
        bodyHeroBoxSizing2="border-box"
        bodyHeroBoxSizing3="border-box"
      />
      <MainContentCardsGroup />
      <MainContentGeneric mainContentGenericBackground="linear-gradient(180deg, #ebf5ff, #92c9f9)" />
    </main>
  );
};

export default Main;
