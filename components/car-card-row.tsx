import type { NextPage } from "next";
import CarCard from "./car-card";

type CarCardRowType = {
  image1?: string;
  image11?: string;
  hasTwoCards: boolean;
  makeValueText1: string;
  modelValueText1: string;
  colorValueText1: string;
  yearValueText1: string;
  typeValueText1: string;
  priceValueText1: string;
  makeValueText2: string;
  modelValueText2: string;
  colorValueText2: string;
  yearValueText2: string;
  typeValueText2: string;
  priceValueText2: string;
};

const CarCardRow: NextPage<CarCardRowType> = ({
  image1,
  image11,
  hasTwoCards,
  makeValueText1,
  modelValueText1,
  colorValueText1,
  yearValueText1,
  typeValueText1,
  priceValueText1,
  makeValueText2,
  modelValueText2,
  colorValueText2,
  yearValueText2,
  typeValueText2,
  priceValueText2,
}) => {
  return (
    <div className="flex flex-row items-start justify-start p-2.5 gap-[111px]">
      <CarCard
        image1={image1}
        makeValueText={makeValueText1}
        modelValueText={modelValueText1}
        colorValueText={colorValueText1}
        yearValueText={yearValueText1}
        typeValueText={typeValueText1}
        priceValueText={priceValueText1}
      />
      {hasTwoCards && (
        <CarCard
          image1={image11}
          makeValueText={makeValueText2}
          modelValueText={modelValueText2}
          colorValueText={colorValueText2}
          yearValueText={yearValueText2}
          typeValueText={typeValueText2}
          priceValueText={priceValueText2}
        />
      )}
    </div>
  );
};

export default CarCardRow;
