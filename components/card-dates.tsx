import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import HeaderCard from "./header-card";

type CardDatesType = {
  calendar1?: string;

  /** Style props */
  cardDatesFlex?: CSSProperties["flex"];
  cardDatesBoxSizing?: CSSProperties["boxSizing"];
};

const CardDates: NextPage<CardDatesType> = ({
  calendar1,
  cardDatesFlex,
  cardDatesBoxSizing,
}) => {
  const cardDatesStyle: CSSProperties = useMemo(() => {
    return {
      flex: cardDatesFlex,
      boxSizing: cardDatesBoxSizing,
    };
  }, [cardDatesFlex, cardDatesBoxSizing]);

  return (
    <div
      className="rounded-xl [background:linear-gradient(180deg,_#e5aeff,_rgba(255,_174,_174,_0))] overflow-hidden flex flex-col items-center justify-center p-[50px] gap-[50px] border-[1px] border-solid border-black"
      style={cardDatesStyle}
    >
      <div className="flex flex-row items-center justify-center">
        <img
          className="relative w-[100px] h-[100px] object-cover"
          alt=""
          src={calendar1}
        />
      </div>
      <HeaderCard text="Choose Dates" />
    </div>
  );
};

export default CardDates;
