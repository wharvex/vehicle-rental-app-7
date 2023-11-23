import { useMemo, type CSSProperties } from "react";
import CarCardRow from "./car-card-row";
import prisma from "@/lib/prisma";

type MainContentCarCardsType = {
  image1?: string;
  image11?: string;

  /** Style props */
  mainContentCarCardsAlignSelf?: CSSProperties["alignSelf"];
  mainContentCarCardsFlex?: CSSProperties["flex"];
};

export default async function MainContentCarCards(fn: MainContentCarCardsType) {
  const mainContentCarCardsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: fn.mainContentCarCardsAlignSelf,
      flex: fn.mainContentCarCardsFlex,
    };
  }, [fn.mainContentCarCardsAlignSelf, fn.mainContentCarCardsFlex]);

  const models = await prisma.model.findMany({});

  return (
    <div
      className="[background:linear-gradient(180deg,_#ebf5ff,_#92c9f9)] flex flex-col items-center justify-center py-[50px] px-[100px]"
      style={mainContentCarCardsStyle}
    >
      {models.map((model) => (
        <CarCardRow
          key={model.id}
          image1="/image-11@2x.png"
          image11="/image-11@2x.png"
          makeValueText1="ford"
          modelValueText1={model.name}
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
      ))}
    </div>
  );
}
