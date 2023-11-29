import { useMemo, type CSSProperties } from "react";
import CarCardRow from "./car-card-row";
import { PairwiseCars } from "@/app/_actions";

type MainContentCarCardsType = {
  /** Style props */
  mainContentCarCardsAlignSelf?: CSSProperties["alignSelf"];
  mainContentCarCardsFlex?: CSSProperties["flex"];

  /** Content props */
  pairwiseCars: PairwiseCars;
};

export default async function MainContentCarCards(fn: MainContentCarCardsType) {
  const mainContentCarCardsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: fn.mainContentCarCardsAlignSelf,
      flex: fn.mainContentCarCardsFlex,
    };
  }, [fn.mainContentCarCardsAlignSelf, fn.mainContentCarCardsFlex]);

  return (
    <div
      className="[background:linear-gradient(180deg,_#ebf5ff,_#92c9f9)] flex flex-col items-center justify-center py-[50px] px-[100px] gap-[35px]"
      style={mainContentCarCardsStyle}
    >
      {fn.pairwiseCars.map((carPair) => (
        <CarCardRow
          key={carPair[0].id}
          hasTwoCards={carPair.length === 2}
          car1={carPair[0]}
          car2={carPair[1]}
        />
      ))}
    </div>
  );
}
