import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import CarCardRow from "./car-card-row";

type MainContentCarCardsType = {
  image1?: string;
  image11?: string;

  /** Style props */
  mainContentCarCardsAlignSelf?: CSSProperties["alignSelf"];
  mainContentCarCardsFlex?: CSSProperties["flex"];
};

const MainContentCarCards: NextPage<MainContentCarCardsType> = ({
  image1,
  image11,
  mainContentCarCardsAlignSelf,
  mainContentCarCardsFlex,
}) => {
  const mainContentCarCardsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: mainContentCarCardsAlignSelf,
      flex: mainContentCarCardsFlex,
    };
  }, [mainContentCarCardsAlignSelf, mainContentCarCardsFlex]);

  return (
    <div
      className="[background:linear-gradient(180deg,_#ebf5ff,_#92c9f9)] flex flex-row items-center justify-center py-[50px] px-[100px]"
      style={mainContentCarCardsStyle}
    >
      <CarCardRow
        image1="/image-11@2x.png"
        image11="/image-11@2x.png"
        makeValueText1="ford"
        modelValueText1="ford"
        colorValueText1="ford"
        yearValueText1="ford"
        typeValueText1="ford"
        priceValueText1="ford"
        makeValueText2="ford"
        modelValueText2="ford"
        colorValueText2="ford"
        yearValueText2="ford"
        typeValueText2="ford"
        priceValueText2="ford"
      />
    </div>
  );
};

export default MainContentCarCards;
