import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import HeaderCard from "./header-card";

type CardVehiclesType = {
  /** Style props */
  cardVehiclesFlex?: CSSProperties["flex"];
  cardVehiclesBoxSizing?: CSSProperties["boxSizing"];
};

const CardVehicles: NextPage<CardVehiclesType> = ({
  cardVehiclesFlex,
  cardVehiclesBoxSizing,
}) => {
  const cardVehiclesStyle: CSSProperties = useMemo(() => {
    return {
      flex: cardVehiclesFlex,
      boxSizing: cardVehiclesBoxSizing,
    };
  }, [cardVehiclesFlex, cardVehiclesBoxSizing]);

  return (
    <div
      className="rounded-xl [background:linear-gradient(180deg,_#e5aeff,_rgba(255,_174,_174,_0))] overflow-hidden flex flex-col items-center justify-center p-[50px] gap-[50px] border-[1px] border-solid border-black"
      style={cardVehiclesStyle}
    >
      <div className="flex flex-row items-start justify-start">
        <img
          className="relative w-[100px] h-[100px] object-cover"
          alt=""
          src="/carsportoutline-1@2x.png"
        />
      </div>
      <HeaderCard text="Browse Vehicles" />
    </div>
  );
};

export default CardVehicles;
