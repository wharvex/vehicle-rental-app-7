import { useMemo, type CSSProperties } from "react";
import CarCardRow from "./car-card-row";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

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

  /**
   * Need to "include" entries from other tables.
   * Need to wrap this find call in a function to get its return type, based on method found here:
   * https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety/operating-against-partial-structures-of-model-types#solution-1
   * */
  async function getCars() {
    const cars = await prisma.car.findMany({
      include: {
        make: true,
        model: true,
        car_type: true,
      },
    });
    return cars;
  }

  type carsType = Prisma.PromiseReturnType<typeof getCars>;

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
          image1={carPair[0].image_path}
          image11={carPair[1].image_path}
          hasTwoCards={carPair.length === 2}
          makeValueText1={carPair[0].make.name}
          modelValueText1={carPair[0].model.name}
          colorValueText1={carPair[0].color}
          yearValueText1={carPair[0].year.toString()}
          typeValueText1={carPair[0].car_type.name}
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
