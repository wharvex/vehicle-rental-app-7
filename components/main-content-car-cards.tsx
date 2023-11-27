import { useMemo, type CSSProperties } from "react";
import CarCardRow from "./car-card-row";
import { getCar, getCars, carType, carsType } from "@/models/car-type";

type MainContentCarCardsType = {
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

  const cars = await getCars();

  /** Adapted this reduce from: https://stackoverflow.com/a/44996257
   * It splits models into an array of two-item arrays so they can be mapped over 2-by-2.
   * If models has an odd number of elements, the last array in pairwiseModels will only
   * have one element.
   * */
  const pairwiseCars = cars.reduce<carsType[]>((result, _, index, array) => {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);

  return (
    <div
      className="[background:linear-gradient(180deg,_#ebf5ff,_#92c9f9)] flex flex-col items-center justify-center py-[50px] px-[100px] gap-[35px]"
      style={mainContentCarCardsStyle}
    >
      {pairwiseCars.map((carPair) => (
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
