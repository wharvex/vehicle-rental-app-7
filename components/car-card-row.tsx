import type { NextPage } from "next";
import CarCard from "./car-card";
import { carType } from "@/models/car-type";

type CarCardRowType = {
  hasTwoCards: boolean;
  car1: carType;
  car2: carType;
};

const CarCardRow: NextPage<CarCardRowType> = ({ hasTwoCards, car1, car2 }) => {
  return (
    <div className="flex flex-row items-start justify-start p-2.5 gap-[111px]">
      <CarCard car={car1} />
      {hasTwoCards && <CarCard car={car2} />}
    </div>
  );
};

export default CarCardRow;
